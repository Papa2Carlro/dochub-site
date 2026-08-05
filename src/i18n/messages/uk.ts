import type { Messages } from "./en";

/** Ukrainian catalog — same keys as en.ts */
export const uk: Messages = {
  seo: {
    homeTitle: "Doc Hub — локальний лаунчер для docs і планування",
    homeDescription:
      "Безкоштовний offline-first лаунчер для соло-розробників: workspaces, браузер docs, дошка планування та розширення — без хмари на базовому рівні. macOS, Windows, Linux.",
    docsTitle: "Документація — як користуватися Doc Hub",
    docsDescription:
      "Встановіть Doc Hub, відкрийте workspace з Docs/, підключіть агентів через dm / MCP і користуйтеся картою інструментів: session, fence, orbit, planning.",
    benchmarkTitle: "Context Benchmark — Docs MD vs Doc Memory MCP",
    benchmarkDescription:
      "Чесний bake-off на проєкті з Docs-SoT: Read/Grep Markdown vs Doc Memory MCP. PASS parity, packet recall і вартість доступу. History — empty-chat starvation.",
  },
  nav: {
    ariaPrimary: "Основна навігація",
    how: "Як це працює",
    screens: "Екрани",
    workflow: "Процес",
    packs: "Паки",
    docs: "Документація",
    benchmark: "Бенчмарк",
    support: "Підтримка",
    share: "Поділитися",
    faq: "FAQ",
    download: "Завантажити",
    home: "Головна",
    langLabel: "Мова",
  },
  hero: {
    headline: "Ваші репозиторії. Ваша документація. Один локальний лаунчер.",
    lede: "Офлайн-планування, документація та розширення для соло-розробників — безкоштовний базовий рівень, хмара не потрібна.",
    stageAriaOpen: "Відкрити скріншот Task board на весь екран",
    stageAlt: "Дошка задач Doc Hub",
  },
  how: {
    title: "Як це працює",
    lede: "Три кроки від порожнього столу до живого локального лаунчера.",
    step1Title: "Завантажте",
    step1Body: "Візьміть збірку для macOS, Windows або Linux. Обліковий запис не потрібен.",
    step2Title: "Вкажіть workspace",
    step2Body:
      "Оберіть будь-яку теку з Docs/ — Doc Hub індексує її локально на вашій машині.",
    step3Title: "Плануйте і шипте",
    step3Body:
      "Користуйтеся дошкою, браузером docs і Trophy Room. Усе лишається offline-first.",
  },
  screens: {
    title: "Як це виглядає",
    lede: "Дошка, дашборд, milestones, Orbit, glossary, MCP history, Trophy Room — натисніть будь-який знімок, щоб збільшити.",
    openAria: "Відкрити {caption} на весь екран",
    close: "Закрити",
    previous: "Назад",
    next: "Далі",
    previousAria: "Попередній скріншот",
    nextAria: "Наступний скріншот",
    taskBoardCaption: "Дошка задач",
    taskBoardAlt:
      "Дошка задач Doc Hub з колонками Open, In Progress, Code Review, QA і Deferred",
    dashboardCaption: "Дашборд",
    dashboardAlt:
      "Огляд дашборду Doc Hub зі статусом workspace і сигналами планування",
    dashboardAuditCaption: "Аудит дашборду",
    dashboardAuditAlt:
      "Аудит дашборду Doc Hub з кількістю задач, індексом docs і здоров’ям кодової бази",
    milestonesCaption: "Milestones",
    milestonesAlt:
      "Перегляд milestones Doc Hub для фаз roadmap і контрольних точок доставки",
    orbitMapCaption: "Карта Orbit",
    orbitMapAlt:
      "Карта Orbit Doc Hub зі зв’язками доменів у workspace",
    livingGlossaryCaption: "Living Glossary",
    livingGlossaryAlt:
      "Living Glossary Doc Hub зі спільними продуктовими термінами та визначеннями",
    mcpHistoryCaption: "Історія MCP",
    mcpHistoryAlt:
      "Історія MCP Doc Hub з викликами інструментів агента та активністю doc-memory",
    trophyRoomCaption: "Trophy Room",
    trophyRoomAlt:
      "Trophy Room Doc Hub з рівнями, XP, стріками та тижневими квестами",
  },
  workflow: {
    eyebrow: "КОНТРОЛЬОВАНА РОБОТА З AI",
    title: "Дайте агентам контекст. Залишіть доставку підзвітною.",
    lede: "Doc Hub допомагає перетворити роботу з AI на контрольований інженерний цикл: спочатку релевантний контекст, явний scope під час імплементації, людська верифікація перед доставкою.",
    taskTitle: "Задача",
    taskBody: "Чіткий намір і scope",
    contextTitle: "Релевантний контекст",
    contextBody: "Docs, рішення та зв’язки задач",
    scopedTitle: "Scoped робота агента",
    scopedBody: "Робота лишається в чітких межах",
    reviewTitle: "Рев’ю та перевірки",
    reviewBody: "Імпакт, тести та аудит",
    deliveryTitle: "Безпечна доставка",
    deliveryBody: "Результат, перевірений людиною",
    relevantTitle: "Релевантний, не вичерпний контекст",
    relevantBody:
      "Документаційні сесії під задачу та пов’язане знання проєкту тримають робочий набір сфокусованим.",
    riskTitle: "Ризик видимий",
    riskBody:
      "Сигнали здоров’я коду, аналіз імпакту та quarantine fences допомагають виявити крихкі місця до розширення зміни.",
    handoffsTitle: "Handoff зі збереженням контексту",
    handoffsBody:
      "Work Capsules зберігають session pack і stop note, потім перевіряють свіжість перед продовженням роботи.",
    verificationTitle: "Верифікація лишається людською",
    verificationBody:
      "Аудит-промпти після роботи показують архітектурні ризики, відсутні тести, дрейф документації та те, що не варто шипити.",
    close: "AI — прискорювач у дисциплінованому інженерному процесі, а не заміна інженерному судженню.",
  },
  features: {
    title: "Що ви отримуєте",
    localTitle: "Локальні workspace",
    localBody:
      "Вкажіть Doc Hub на будь-який репозиторій. Docs, планування та інструменти лишаються на вашій машині.",
    boardTitle: "Дошка планування",
    boardBody:
      "Задачі, milestones і trail — базовий рівень безкоштовно назавжди, готовий до офлайну.",
    extensionsTitle: "Розширення без lock-in",
    extensionsBody:
      "Мовні адаптери та приватні плагіни сидять на відкритих контрактах. Ядро лишається вашим.",
  },
  packs: {
    eyebrow: "First-party Plugin Store",
    title: "Паки, що лишаються на вашій машині",
    lede: "Безкоштовні адаптери йдуть з каталогом. Платні паки — опційно: лаунчер лишається безкоштовним, офлайн і вашим.",
    tierFree: "безкоштовно",
    tierPaid: "платно",
    includedMeta: "У каталозі",
    ctaEmailLicense: "Написати по email за ліцензію · ${price}",
    ctaNotify: "Повідомити мене · ${price}",
    earlyAria: "Рання пропозиція ліцензії",
    earlyKicker: "Early access · до {date}",
    earlyBody:
      "Хочете ліцензію на платний пак до checkout? Напишіть на {email} з назвою пака — надішлемо ключ. Після {date} ліцензії йдуть через звичайний платний checkout.",
    tsName: "Адаптер JavaScript / TypeScript",
    tsBlurb: "Мапить інструменти Node/TS у події платформи.",
    unityName: "Адаптер Unity / C#",
    unityBlurb: "Мапить активність Unity Editor у події платформи.",
    visualShipName: "Visual Ship Gate",
    visualShipBlurb:
      "Playwright-знімки, diff з baseline і CI-гейті для локальних web UI маршрутів — $15 разово.",
    dtjName: "DTJ Trace Gate",
    dtjBlurb:
      "Портативні .dtj-сесії, TraceQL explore, MCP analyze та incident bundles для board/CI — $25 разово.",
  },
  support: {
    title: "Підтримайте автора",
    lede: "Безкоштовний базовий рівень Doc Hub лишається безкоштовним. Patreon — це tip jar для студійної роботи; паки купуються окремо (або email до 1 вересня 2026 — див. Паки).",
    packsLink: "Паки",
    feedback: "Фідбек, баги або рання ліцензія на пак:",
    badgePopular: "Популярно",
    ctaJoin: "Приєднатися на Patreon",
    note: "Вищі рівні включають усе нижче. Тут немає unlock паків.",
    priceUnit: "/міс",
    sparkBlurb: "Подяка — і доступ до стрічки для саппортерів.",
    emberBlurb: "Плюс щомісячна подяка від студії.",
    patronBlurb: "Плюс ранні changelog / build notes для Doc Hub і студії.",
    anvilBlurb: "Плюс ваше ім’я на майбутній стіні Supporters.",
    foundingBlurb: "Плюс м’який голос щодо пріоритетів наступного.",
    papaBlurb: "Плюс персональна подяка в release note, коли доречно.",
  },
  whatsNew: {
    title: "Що нового в 0.1.0",
    lede: "Перший публічний канал безкоштовного лаунчера — приватне джерело, публічні бінарники.",
    item1: "Брендинг Doc Hub і closed-core дистрибуція",
    item2: "Інсталятори macOS, Windows і Linux на CDN-шляху",
    item3: "Автооновлення в застосунку через підписаний latest.json",
    item4: "Маркетинговий сайт з продуктовими екранами та базовим SEO",
    note: "Непідписані збірки можуть потребувати кліку довіри ОС — деталі в FAQ.",
  },
  promo: {
    title: "Поділіться",
    lede: "Local-first docs і планування — безкоштовний базовий рівень, хмара не потрібна. Візьміть знімок Board або OG і поділіться.",
    ctaPress: "Відкрити press kit",
    ctaBoardShot: "Завантажити знімок Board",
    ctaOg: "Завантажити OG",
    shareBlurb:
      "Doc Hub — local-first лаунчер для docs і планування.\nБезкоштовний базовий рівень, хмара не потрібна.\nhttps://dochub-site.pages.dev",
  },
  waitlist: {
    title: "Отримуйте сповіщення",
    ledeNoFormBefore: "Збірки вже в секції",
    ledeNoFormAfter: ".",
    earlyLicense:
      "Для ранніх ліцензій на платні паки (до {date}) пишіть на {email}.",
    downloadLink: "Завантажити",
    ledeWithForm:
      "Збірки виходять. Залиште email — повідомимо, коли Doc Hub буде готовий до завантаження.",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    submit: "Повідомити мене",
    submitting: "Надсилаємо…",
    success: "Ви в списку — напишемо, коли збірка буде готова.",
    error: "Зараз не вдалося надіслати. Спробуйте за мить.",
  },
  faq: {
    title: "FAQ",
    q1: "Doc Hub безкоштовний?",
    a1: "Так. Безкоштовний базовий рівень лаунчера — workspace, docs, дошка планування, локальна аналітика — лишається безкоштовним. Обов’язкової підписки для доступу до проєкту немає.",
    q2: "Чи потрібна хмара?",
    a2: "Ні. Основні сценарії — local-first і працюють офлайн. Cloud sync не входить у безкоштовний базовий рівень.",
    q3: "Які платформи підтримуються?",
    a3: "Інсталятори macOS (Apple Silicon), Windows і Linux у секції Завантажити на цьому сайті. Збірки для Intel Mac ще не публікуються.",
    q4: "macOS каже, що розробника не вдалося перевірити — що робити?",
    a4: "Для непідписаних збірок: клацніть правою кнопкою по застосунку → Відкрити → Відкрити. Нотаризація Apple — опційно для пізніших релізів.",
    q5: "Чи відкритий вихідний код?",
    a5: "Застосунок — closed core. Контракти розширень публікуються для адаптерів і плагінів. Інсталятори розповсюджуються окремо від приватного репозиторію з вихідним кодом.",
    q6: "Що таке платні паки?",
    a6: "Опційні разові паки: Visual Ship Gate ($15) для screenshot-гейтів браузерного UI, і DTJ Trace Gate ($25) для портативних .dtj explore/analyze і incident bundles. Безкоштовний базовий рівень лаунчера лишається безкоштовним.",
    q7: "Як отримати ліцензію на пак до checkout?",
    a7: "До 1 вересня 2026 напишіть на priymak615@gmail.com з назвою пака (Visual Ship Gate або DTJ Trace Gate) — надішлемо ранній ключ ліцензії. Після цієї дати паки йдуть через звичайний платний checkout.",
  },
  download: {
    title: "Отримати Doc Hub",
    lede: "Безкоштовний базовий рівень назавжди. Оберіть ОС — інсталятори з нашого CDN (macOS зараз — Apple Silicon).",
    ctaPrimary: "Завантажити для {os}",
    ctaAllPlatforms: "Усі платформи",
    ctaAllReleases: "Усі релізи",
    platformsAria: "Завантаження за платформами",
    osMac: "macOS (Apple Silicon)",
    osWin: "Windows",
    osLinux: "Linux",
    osOther: "вашої ОС",
    hintCdn: "Завантаження йдуть з нашого CDN (підрахунок по ОС).",
    hintMac:
      "DMG для Apple Silicon. Непідписано: клацніть правою → Відкрити → Відкрити. Збірки для Intel Mac ще не публікуються.",
    hintWin: "Непідписані збірки: SmartScreen → Докладніше → Виконати все одно.",
  },
  social: {
    navLabel: "Carlo Forge у соцмережах",
    lede: "Слідкуйте за Carlo Forge — оновлення в Telegram, X і на Patreon.",
  },
  footer: {
    tagline: "Closed core · завантаження рахуються на нашому CDN",
    privacy: "Конфіденційність",
    press: "Press",
    docs: "Документація",
    benchmark: "Бенчмарк",
    support: "Підтримка",
    notify: "Сповіщення",
    download: "Завантажити",
  },
  docs: {
    crumbHome: "← Doc Hub",
    crumbCurrent: " · Документація",
    title: "Як користуватися Doc Hub",
    lede: "Гід для безкоштовного лаунчера — встановлення, workspace, щоденний цикл, агенти та поверхня dm / doc-memory, яку агенти реально викликають. Обліковий запис не потрібен.",
    tocLabel: "На цій сторінці",
    installTitle: "1. Встановлення",
    installStep1Title: "Завантажте збірку для своєї ОС",
    installStep1Body:
      "Секція Download на цьому сайті. Інсталятори з нашого CDN — macOS зараз Apple Silicon; також є Windows і Linux.",
    installStep2Title: "Відкрийте застосунок один раз",
    installStep2Body:
      "Без входу. Якщо ОС блокує непідписану збірку — див. розділ Trust нижче, потім відкрийте знову.",
    installStep3Title: "Тримайте оновлення",
    installStep3Body:
      "Автооновлення в застосунку йде через підписаний канал latest.json, коли з’являється новіша збірка.",
    installCta: "До Download",
    workspaceTitle: "2. Відкрийте workspace",
    workspaceBody:
      "Вкажіть Doc Hub на теку проєкту. Краще дерево, де вже є Docs/ — саме на це спираються локальний індекс і сесії агентів.",
    workspaceLi1:
      "Документація лишається на вашій машині. Індексація локальна; хмарний sync не входить у безкоштовний базовий рівень.",
    workspaceLi2:
      "Стан планування живе в .dochub/ у workspace (SQLite-дошка). Не створюйте другу board DB у корені репо.",
    workspaceLi3:
      "Workspace можна змінювати пізніше — кожна тека тримає свою локальну дошку й індекс docs.",
    workspaceExample:
      "dm init\ndm info\ndm doctor\ndm use my-project",
    dailyTitle: "3. Щоденний цикл",
    dailyBody:
      "Doc Hub — локальна панель керування проєктом, не хмарне IDE.",
    dailyBoardTitle: "Дошка планування",
    dailyBoardBody:
      "Open → In Progress → review → done. Milestones і trail тримають delivery видимим без SaaS-дошки.",
    dailyDocsTitle: "Браузер Docs",
    dailyDocsBody:
      "Переглядайте й шукайте Docs проєкту, не звалюючи цілі файли в кожен чат. Краще короткі, task-shaped пакети.",
    dailyOrbitTitle: "Orbit і glossary",
    dailyOrbitBody:
      "Карти доменів і спільні терміни — щоб агенти й люди мали на увазі одне й те саме.",
    agentsTitle: "4. Агенти й MCP",
    agentsBody:
      "Doc Hub дає CLI dm і MCP-сервер doc-memory. Cursor (чи інший MCP-клієнт) має викликати ці інструменти, а не звалювати весь Docs/ у контекст.",
    agentsStep1Title: "Init + Agents pack",
    agentsStep1Body:
      "Запустіть dm init у workspace (або Workspace Doctor → Init у застосунку). Це створює .dochub/workspace.sqlite, індексує Docs/ і синхронізує Agents pack у ~/.config/doc-hub/agents/.",
    agentsStep2Title: "Підключіть MCP у редакторі",
    agentsStep2Body:
      "У Cursor: Settings → MCP → увімкніть сервер Doc Hub / doc-memory з застосунку або Agents pack. Токени локальні — ніколи не комітьте їх.",
    agentsStep3Title: "Стартуйте з session-пакета",
    agentsStep3Body:
      "Попросіть агента почати з dm session / doc_session під задачу. Поглиблюйте через chain, section або search лише за потреби — не з повного Read репо.",
    agentsExample:
      "dm session \"fix download CTA copy\" --domain wires\ndm chain \"download band CTAs\"\ndm section getting-started.md \"Quick start\"",
    agentsCalloutStrong: "Агенти прискорюють; ви перевіряєте.",
    agentsCalloutBody:
      "Перед шипом — impact, тести й людський review. Повна карта інструментів:",
    agentsToolsLink: "dm і MCP ↓",
    toolsTitle: "5. dm і MCP інструменти",
    toolsLede:
      "Інструментів багато навмисно — згруповані за задачею. Беріть найменший пакет, що відповідає на задачу. dm — CLI-дзеркало MCP-сервера (doc-memory).",
    toolsMirrorStrong: "Одна поверхня, двоє дверей.",
    toolsMirrorBody:
      "dm session ≈ MCP doc_session. dm fence check ≈ fence_check. Якщо в агента лише MCP — MCP-імена; у терміналі — dm.",
    toolsMcpLabel: "MCP:",
    toolsBootTitle: "Bootstrap",
    toolsBootBody:
      "Створити/мігрувати локальну board DB, перевірити здоров’я індексу й синхронізувати skills/rules у Cursor / Claude / Codex.",
    toolsBootCmds:
      "dm init\ndm info\ndm doctor\ndm agents status|update\ndm skills status|update",
    toolsBootMcp: "doc_init_project · doc_info · doc_doctor · doc_agents_* · doc_skills_*",
    toolsLookupTitle: "Пошук у Docs (старт агентських чатів)",
    toolsLookupBody:
      "Маршрутизувати задачу до Docs без читання цілих канон-файлів. session — звичний one-shot вхід; section/brief поглиблюють один heading.",
    toolsLookupCmds:
      "dm session \"…\" [--domain …]\ndm chain \"…\"\ndm route \"…\"\ndm search \"…\"\ndm section path.md \"Heading\"\ndm brief path.md\ndm stale",
    toolsLookupMcp:
      "doc_session · doc_chain · doc_route · doc_search · doc_section · doc_brief · doc_stale_check · doc_starter · doc_depth · doc_map_section",
    toolsReposTitle: "Workspace і constellation",
    toolsReposBody:
      "Аліаси вказують на зареєстровані репо. Перемикання фокусу — use. Groups (constellation) роблять read-only fan-out по пов’язаних репо.",
    toolsReposCmds:
      "dm list\ndm use <alias>\ndm rename <alias> <new>\ndm group list|create|…",
    toolsReposMcp:
      "doc_list_repos · doc_use_repo · doc_rename_repo · group_* / constellation tools",
    toolsSafetyTitle: "Безпека перед правкою",
    toolsSafetyBody:
      "Межі Orbit, quarantine fences, blast-radius поверхні, stop-lines і confidence zones — перевіряйте перед розширенням крихкого шляху.",
    toolsSafetyCmds:
      "dm orbit of <path>\ndm orbit gate\ndm fence check <path> …\ndm fence gate\ndm blast match <path>\ndm stop evaluate\ndm confidence match <path>",
    toolsSafetyMcp:
      "orbit_* · fence_* · blast_* · stop_* · confidence_*",
    toolsHandoffTitle: "Неперервність і дослідження",
    toolsHandoffBody:
      "Заморозити сесію, передати іншій людині/репо, вести open questions, debt, findings, glossary і rituals.",
    toolsHandoffCmds:
      "dm capsule capture|resume …\ndm briefcase create|seal|export …\ndm question list|create …\ndm debt create|list …\ndm finding list|create …\ndm glossary lookup …\ndm ritual list|due",
    toolsHandoffMcp:
      "capsule_* · briefcase_* · question_* · debt_* · finding_* · glossary_* · ritual_*",
    toolsCraftTitle: "Shape, friction, audit",
    toolsCraftBody:
      "Dry-run розбиття файлів/тек, скан friction агента з MCP history і post-work audit prompt для задачі на дошці.",
    toolsCraftCmds:
      "dm shape plan <path>\ndm shape folder <dir>\ndm friction scan\ndm history\ndm audit-prompt <task_id>",
    toolsCraftMcp:
      "shape_* · friction_* · doc_history · audit_prompt_get",
    toolsOpsTitle: "Extensions, license, serve",
    toolsOpsBody:
      "Реєстр розширень, visibility fences, capability consent, ліцензії паків і довгоживучі workers для лаунчера.",
    toolsOpsCmds:
      "dm extension …\ndm visibility …\ndm consent …\ndm license …\ndm mcp\ndm serve\ndm legacy list|clean",
    toolsOpsMcp:
      "extension_* · visibility / consent tools · license_* · MCP stdio / worker serve",
    toolsBoardTitle: "Дошка планування (MCP)",
    toolsBoardBody:
      "Tasks, epics, milestones, attachments, leases і close/export живуть переважно як MCP planning tools, поки лаунчер підключений — той самий .dochub/workspace.sqlite, що й UI.",
    toolsBoardMcp:
      "task_* · epic_* · milestone_* · attachment_* · lease_* · planning_* · backlog_import · board_writers",
    toolsMapTitle: "Повна карта команд dm",
    toolsMapBody:
      "Top-level сабкоманди dm (прапорці: dm <cmd> -h). MCP віддає ті самі jobs під іменами doc_* / family_*.",
    toolsMapCmds:
      "info doctor init legacy list use rename group\nextension visibility consent\nsession chain route search section brief stale history\norbit fence capsule briefcase question blast confidence finding stop debt glossary ritual friction shape\naudit-prompt agents skills license mcp serve",
    toolsMapHint: "Підказка: dm --help друкує це з вашої встановленої CLI.",
    packsTitle: "6. Паки",
    packsBody:
      "Безкоштовний базовий рівень лаунчера лишається безкоштовним. Опційні one-time паки додають gates (скріни UI, DTJ-трейси), не замикаючи core.",
    packsLi1:
      "Безкоштовні адаптери (TypeScript, Unity, …) є в first-party store-каталозі.",
    packsLi2:
      "Платні паки: Visual Ship Gate і DTJ Trace Gate — ціни в секції Packs на головній.",
    packsLi3:
      "До 1 вересня 2026 можна написати на email за ранній ключ; після — звичайний checkout.",
    packsCta: "Дивитись Packs",
    trustTitle: "7. Довіра ОС (непідписані збірки)",
    trustBody:
      "Ранні збірки можуть ще не бути нотарізовані. Це gate ОС, не стіна логіну Doc Hub.",
    trustLi1: "macOS: клацніть правою по застосунку → Відкрити → Відкрити.",
    trustLi2: "Windows: SmartScreen → Докладніше → Виконати все одно.",
    trustLi3: "Linux: дотримуйтесь політики дистрибутива для AppImage / пакетів.",
    helpTitle: "8. Допомога",
    helpBody:
      "Баги, фідбек або ранні ліцензії паків — email. FAQ на головній покриває ціни, платформи й політику сорсу.",
    helpFaq: "FAQ",
    helpBenchmark: "Context Benchmark",
    footBack: "← Назад до Doc Hub",
    footDownload: "Завантажити",
  },
  benchmark: {
    crumbHome: "← Doc Hub",
    crumbCurrent: " · Context Benchmark",
    title: "Context Benchmark",
    lede: "Той самий проєкт, Docs як джерело правди — Read/Grep Markdown vs Doc Memory MCP. Чесні rates: outcome parity, packet recall і вартість доступу. Empty-chat starvation — у History.",
    tabsAria: "Види бенчмарка",
    tabNow: "Зараз",
    tabHistory: "History",
    labelMd: "Docs (MD)",
    labelMcp: "Doc Memory (MCP)",
    labelMdShort: "MD",
    labelMcpShort: "MCP",
    labelEmptyShort: "Empty",
    labelWithout: "Без Doc Memory",
    labelWith: "З Doc Memory",
    labelWithoutShort: "Без",
    labelWithShort: "З",
    labelBefore: "до",
    labelAfter: "після",
    nowMeta: "Docs MD vs MCP · Phase D / Phase B pilot · locked scoring",
    fairCallout:
      "Чесний bake-off: обидві руки дістають до Docs. Не «порожній чат vs продукт».",
    nowNote:
      "PASS/crit з Phase B pilot (n=5). Recall-панель з Phase A packets (n=20). CB-004/CB-006 поза Now, доки немає Docs MD руки.",
    deltaTitle: "Дельти (MCP − MD)",
    ctaDownload: "Завантажити Doc Hub",
    ctaNote: "Той самий локальний лаунчер, що в чесному suite.",
    statPassRate: "PASS rate",
    statRecall: "Critical-context recall",
    statExtras: "Середні зайві пошуки",
    recallBase: "Instruction / MD-style packet",
    recallDelta: "з Doc Memory packet",
    parityNote: "Outcome parity на Docs-saturated dogfood — MCP тут не «виграє PASS».",
    costTitle: "Вартість vs якість",
    costX: "Середні зайві пошуки",
    costY: "PASS %",
    costNote:
      "Той самий PASS; MCP коштував більше follow-up fetches на цьому pilot (efficiency далі).",
    perTaskTitle: "По задачах (n під rates)",
    perTaskLede: "Кожен PASS — одна з п’яти карток; sample size видно.",
    dualTitle: "Outcomes + зайві пошуки",
    dualRate: "Outcome задачі",
    dualN: "Problems included",
    armsTitle: "Що це за руки",
    armMdTitle: "Docs (MD)",
    armMdBody:
      "AGENTS/CLAUDE + Read/Grep по Docs/** і репо. Без Doc Memory MCP — filesystem доступ до того самого SoT.",
    armMcpTitle: "Doc Memory (MCP)",
    armMcpBody:
      "Той самий промпт. Перший інструмент: doc_session, далі scoped Doc Hub tools (+ читання репо за потреби).",
    walkTitle: "Що відбувається",
    walkLede: "Два з п’яти чесних промптів — шлях Grep MD vs MCP session.",
    walk1Title: "Спільна локальна дошка",
    walk1Prompt:
      "Узгодити Tauri, dm, MCP і Python worker на одному .dochub/workspace.sqlite.",
    walk1Plain:
      "Через Grep/Read multi-command guide + ADR 0004; LOCK / IDENTITY / HANDOFF. PASS.",
    walk1Dm:
      "doc_session → той самий guide + ADR; LOCK / IDENTITY / HANDOFF. PASS (більше follow-up fetches).",
    walk1Takeaway:
      "На Docs-SoT обидві руки можуть PASS; різниця — шлях доступу й вартість, не empty vs full.",
    walk2Title: "Unity pin без поломки Doc Hub",
    walk2Prompt:
      "Вікна Cursor для Unity потребують Doc Hub MCP на Unity без поломки вікна doc-hub.",
    walk2Plain:
      "Знайшов per-project mcp.json / registry в Docs через Read/Grep. PASS.",
    walk2Dm:
      "doc_session + Docs відновили per-project pins / coexistence. PASS.",
    walk2Takeaway:
      "Чесний тест: обидві можуть прочитати політику. MCP — не єдиний шлях, коли Docs уже на диску.",
    walk3Title: "Advisory task leases",
    walk3Prompt:
      "Додати task leases, щоб два агенти рідше брали ту саму задачу. Координація має лишатись soft.",
    walk3Plain:
      "Вигадав exclusive locks / Redis; fail-closed writes замість advisory TTL.",
    walk3Dm:
      "Відновив P29 soft lease_claim / peek / release на тій самій локальній дошці. PASS.",
    walk3Takeaway:
      "Empty-chat starvation (History) — не частина чесного Now.",
    walk4Title: "Visibility fence SoT",
    walk4Prompt:
      "Підключити visibility fence як SoT і setFenceDenyList через Settings та MCP roots.",
    walk4Plain:
      "Злив у quarantine fence_check; MCP roots лишив optional.",
    walk4Dm:
      "ADR 0001 §F launcher visibility_fence + hydrate setFenceDenyList. PASS.",
    walk4Takeaway:
      "Empty-chat starvation (History) — не частина чесного Now.",
    case001Title: "Спільна локальна дошка",
    case002Title: "SQLite busy / WAL",
    case004Title: "Advisory task leases",
    case005Title: "ADR runtime truth",
    case006Title: "Visibility fence SoT",
    case007Title: "Unity MCP pin",
    case011Title: "Quarantine fence",
    historyLede:
      "Starvation demo, packet recall і efficiency R&D. Не обов’язково для чесного Docs MD vs MCP.",
    timelineTitle: "Таймлайн оцінок",
    timelineNote:
      "Phase A = recall %. Phase B / R1 / Post-fix = середні extras (MCP). Різні одиниці — читай підписи.",
    phaseCTitle: "Phase C — порожній чат vs MCP",
    phaseCMeta: "n=7 · без інструментів vs Doc Memory · не чесний Docs bake-off",
    phaseCWarn:
      "Starvation: plain рука не може Read Docs. Не трактуй 0%→100% як чесний headline.",
    phaseCDualTitle: "Empty chat PASS vs MCP PASS",
    phaseCDefer:
      "CB-004 / CB-006 лише тут — поза Now, доки немає Docs MD руки.",
    phaseAMeta: "пакет instruction files vs Doc Hub session · без кодингу",
    phaseARecallFiles: "Recall · instruction files",
    phaseARecallDm: "Recall · Doc Memory",
    phaseAMissFiles: "Miss rate · instruction files",
    phaseAMissDm: "Miss rate · Doc Memory",
    phaseADelta: "Δ recall",
    phaseARelCut: "Відносне скорочення miss",
    barFiles: "Instruction files",
    barDm: "Doc Memory",
    phaseBMeta: "Ті самі fair руки Now · Baseline = Docs MD · Doc Hub = MCP",
    phaseBPassBase: "PASS · Docs MD",
    phaseBPassDm: "PASS · MCP",
    phaseBExtraBase: "Середні зайві пошуки · Docs MD",
    phaseBExtraDm: "Середні зайві пошуки · MCP",
    phaseBDelta: "Δ середніх зайвих пошуків",
    phaseBCrit: "Critical misses (обидві)",
    phaseBNote:
      "Ці прогони живлять вкладку Зараз. PASS/PASS коли Docs доступні обома шляхами.",
    cb001Meta: "Той самий промпт · зайві пошуки Doc Memory після обмеженого фіксу routing/session",
    cb001Before: "Зайві пошуки · CB-001",
    cb001After: "Зайві пошуки · CB-001-R1",
    cb001Reduction: "Відносне скорочення",
    cb001Outcome: "Outcome",
    postFixMeta: "лише Doc Memory · три фікси session/retrieval · Baseline не перезапускали",
    postFixBefore: "Середні зайві пошуки · до фіксів",
    postFixAfter: "Середні зайві пошуки · після фіксів",
    postFixReduction: "Відносне скорочення",
    postFixPerCaseAria: "Зайві пошуки по задачах до → після",
    limitationsTitle: "Обмеження",
    lim1: "Зараз: Docs MD = AGENTS + Read/Grep; MCP = спочатку doc_session. Той самий dogfood Docs SoT.",
    lim2: "n = 5 чесний suite; не сліпий; лише design-артефакти. Gold уже в Docs.",
    lim3: "History: empty-chat starvation (Phase C), R1/post-fix efficiency — не fair outcome wins.",
    lim4: "На цій сторінці немає зовнішніх свідчень тяги чи readiness-to-pay.",
    footSnapshot:
      "Знімок 2026-08-06 · Phase D fair bake-off · Повні артефакти в grant-корпусі Doc Hub.",
    footBack: "← Назад до Doc Hub",
    footPress: "Press kit",
    footDownload: "Завантажити",
  },
};
