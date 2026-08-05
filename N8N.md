# Інструкція: n8n + Cursor → пост у Telegram

Мета: з Cursor / webhook публікувати текст з `PROMO.md` у Telegram (+ X, коли API write ок).

Reddit / HN — вручну. Discord — опційно (потрібен webhook URL).

### Channels (body.channel)

| channel | Куди |
|---------|------|
| `telegram` | Carlo Forge TG |
| `twitter` / `x` | X / Twitter |
| `discord` | Discord webhook (env) |
| `both` | Telegram + X |
| `all` | Telegram + Discord + X |
| `dry_run: true` | нічого не шле, повертає payload |

Webhook:

```bash
curl -X POST http://localhost:5678/webhook/doc-hub-promo \
  -H 'Content-Type: application/json' \
  -d '{"channel":"telegram","dry_run":false,"text":"… з PROMO.md …","image":"https://dochub-site.pages.dev/screens/portfolio-task-board.png"}'
```

Опційно `image` — публічний HTTPS URL. Для Telegram: `sendPhoto` + caption = `text` (≤1024 символів). Без `image` — звичайний текстовий пост. X поки лише текст.

**X:** credential `Carlo Forge X OAuth1` на ноді X (HTTP → `api.twitter.com/2/tweets`). Якщо live дає `oauth1 app permissions` / Forbidden — у [X Developer Console](https://developer.x.com/en/portal/dashboard):

1. App → **User authentication settings** → App permissions = **Read and write**
2. **Keys and tokens** → **Regenerate** Access Token & Secret
3. У n8n онови credential `Carlo Forge X OAuth1` (`oauthToken` + `oauthTokenSecret`)
4. Publish workflow → знову `channel: "twitter"`

OAuth2 user token у `.secrets/x-oauth2.txt` короткоживучий (~2h); для постів надійніше OAuth1 після write permissions.

---

## Крок 0. Self-host на Docker (безкоштовно) — рекомендовано

```bash
cd dochub-site/n8n
docker compose up -d
```

- UI: http://localhost:5678  
- Compose: [`n8n/docker-compose.yml`](./n8n/docker-compose.yml)  
- Імпорт/стан: workflow `doc-hub-promo-publish` уже можна підняти з Cloud JSON  
- Webhook (локально): `POST http://localhost:5678/webhook/doc-hub-promo`  
  body: `{ "channel": "telegram", "text": "...", "dry_run": false }`

Cursor MCP після Enable Instance MCP — **і** в `~/.cursor/mcp.json` (user), **і** в project `.cursor/mcp.json`:

```json
"n8n": {
  "type": "http",
  "url": "http://localhost:5678/mcp-server/http",
  "headers": {
    "Authorization": "Bearer <TOKEN>"
  }
}
```

User-level `~/.cursor/mcp.json` має пріоритет для Cursor MCP (`user-n8n`). Якщо там Cloud URL — агент править Cloud, а webhook лишається на Docker. Після зміни: Reload MCP.

Зовнішні webhooks з інтернету потребують тунель (Cloudflare Tunnel / ngrok). Локальні пости з Cursor — ок на `localhost`.

---

## Крок 1. Акаунт n8n (Cloud, якщо не Docker)

1. Відкрий https://n8n.io/cloud/ і створи інстанс.
2. Запам’ятай URL, наприклад: `https://NAME.app.n8n.cloud`

---

## Крок 2. Увімкни MCP в n8n

1. У n8n: **Settings → Instance-level MCP** (інколи **MCP Access**).
2. Увімкни **Enable MCP access**.
3. Відкрий **Connection details**.
4. Вкладка **Access Token**:
   - скопіюй **URL** → має закінчуватись на `/mcp-server/http`
   - скопіюй **token**
5. Збережи їх у нотатках (токен у git не комітити).

---

## Крок 3. Підключи MCP у Cursor

**Варіант A (рекомендовано)** — Cursor Settings → MCP → Add new → HTTP:

| Поле | Значення |
|------|----------|
| Name | `n8n` |
| URL | `https://NAME.app.n8n.cloud/mcp-server/http` |
| Header | `Authorization` = `Bearer ТВІЙ_ТОКЕН` |

**Варіант B** — файл `.cursor/mcp.json` (ecosystem root), додати в `mcpServers`:

```json
"n8n": {
  "type": "http",
  "url": "https://NAME.app.n8n.cloud/mcp-server/http",
  "headers": {
    "Authorization": "Bearer ТВІЙ_ТОКЕН"
  }
}
```

Після збереження: Reload MCP / перезапусти Cursor.  
Перевірка: у списку MCP сервер `n8n` зелений (або без error).

---

## Крок 4. Telegram bot

1. У Telegram відкрий **@BotFather** → `/newbot` → отримай **bot token**.
2. Створи канал або групу для постів Doc Hub.
3. Додай бота в канал як admin (право писати повідомлення).
4. Дізнайся **chat id**:
   - напиши щось у канал;
   - відкрий у браузері:  
     `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`  
   - знайди `"chat":{"id": -100…}` — це chat id (часто від’ємний для каналів).

---

## Крок 5. Імпорт workflow

1. У n8n: **Workflows → Import from File**.
2. Файл: `dochub-site/n8n/doc-hub-promo-publish.json`
3. Відкрий ноду **Telegram**:
   - створи Credential з bot token;
   - у полі Chat ID постав свій id **або** задай env `DOC_HUB_TG_CHAT_ID`.
4. Discord (опційно): env `DOC_HUB_DISCORD_WEBHOOK_URL` = webhook URL з Discord.
5. Збережи workflow.

---

## Крок 6. Дозволь workflow для MCP

1. Відкрий цей workflow.
2. Settings workflow → увімкни **Available in MCP** / MCP access.
3. Натисни **Publish** (обов’язково).

Без цього Cursor workflow не побачить / не запустить.

---

## Крок 7. Тест з Cursor

У чаті Cursor (цей проєкт):

**1) Dry-run (нічого не поститься):**

> Через n8n MCP виконай workflow `doc-hub-promo-publish` з  
> `channel: "telegram"`, `dry_run: true`,  
> `text:` [встав блок UA з PROMO.md]

Очікуй відповідь на кшталт `{ ok: true, dry_run: true, ... }`.

**2) Живий пост:**

> Те саме, але `dry_run: false`

Перевір Telegram — має з’явитись повідомлення.

---

## Входи workflow

| Поле | Значення |
|------|----------|
| `channel` | `telegram` · `discord` · `twitter`/`x` · `both` (TG+X) · `all` |
| `text` | текст поста (з `PROMO.md`); для photo — caption |
| `image` | опційно HTTPS URL (напр. `/screens/portfolio-task-board.png`) |
| `dry_run` | `true` = тільки перевірка, `false` = пост |

Тексти брати з: `dochub-site/PROMO.md`  
Перший пост: секція **UA** або **Early license**.

---

## Якщо щось зламалось

| Симптом | Що перевірити |
|---------|----------------|
| MCP червоний / unauthorized | URL + `Bearer ` + токен; Instance MCP увімкнений |
| Workflow не видно | Available in MCP + Publish |
| Зміни з MCP не в webhook | Cursor `user-n8n` може бити в Cloud; webhook — `localhost:5678` (Docker). Перевір `search_workflows` id |
| Telegram error | bot admin у каналі; правильний chat id |
| Photo не йде | потрібен `image` HTTPS URL; caption ≤1024 |
| Import кривий | збері workflow вручну: Trigger → IF dry_run → Telegram |

Fallback MCP (якщо HTTP не тягнеться):

```json
"n8n": {
  "command": "npx",
  "args": [
    "-y", "supergateway",
    "--streamableHttp", "https://NAME.app.n8n.cloud/mcp-server/http",
    "--header", "authorization:Bearer ТВІЙ_ТОКЕН"
  ]
}
```

---

## Файли

| Файл | Навіщо |
|------|--------|
| `PROMO.md` | готові тексти постів |
| `n8n/doc-hub-promo-publish.json` | імпорт у n8n |
| цей `N8N.md` | інструкція |
