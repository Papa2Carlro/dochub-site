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
    lede: "Ті самі промпти агента — лише Docs vs Docs плюс Doc Memory. Спочатку графіки за категоріями задач; відкрий задачу для історії without → with. Насичений parity і starvation — у History.",
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
    nowMeta: "n=11 visitor jobs · wave-visitor-1 · live capsules · locked scoring",
    badgesAria: "Бейджі suite",
    badgeLive: "Live capsules",
    badgeAdv: "Advantage-pool MCP PASS",
    fairCallout:
      "Чесний bake-off: обидві руки дістають до Docs у репо. Ties дозволені, коли Docs уже відповідають на задачу. Не «порожній чат vs інструменти».",
    chartsTitle: "Графіки suite",
    chartsLede: "PASS rate за категоріями задач, далі advantage-pool і cost vs quality для всієї хвилі.",
    catChartTitle: "PASS rate за категоріями",
    catChartNote:
      "Кожна група — visitor job category. MD і MCP на тих самих промптах.",
    jobsTitle: "Задачі за категоріями",
    jobsLede: "Відкрий задачу для історії without → with і метрик.",
    jobsCount: "задач",
    jobOpen: "Деталі",
    modalClose: "Закрити",
    modalMetrics: "Метрики задачі",
    modalCrit: "Critical misses",
    modalNoWalk: "Немає walkthrough для цієї задачі — нижче outcomes і extras.",
    catHandoff: "Продовжити після іншого агента",
    catHandoffShort: "Handoff",
    catContinuity: "Новий чат після паузи",
    catContinuityShort: "Continuity",
    catSecrets: "Секрети / paths поза git",
    catSecretsShort: "Secrets",
    catTwoWindows: "Два вікна Cursor",
    catTwoWindowsShort: "Два вікна",
    catStaleDocs: "Stale tip vs поточне рішення",
    catStaleDocsShort: "Stale tip",
    catChecklist: "Checklist перед schema-зміною",
    catChecklistShort: "Checklist",
    catScattered: "Правило розкидане по docs",
    catScatteredShort: "Scattered",
    catTies: "Чесні ties — Docs уже вистачає",
    catTiesShort: "Ties",
    nowNote:
      "Visitor wave-visitor-1: Doc Memory відновив рішення, які Docs-only пропустив — handoff, continuity, secrets, leases у двох вікнах, stale Redis tip і tip «ship now / skip checklist» (live capsules). Suite ще має чесні PASS/PASS nulls і два F ties. Evaluator-conducted design-артефакти.",
    deltaTitle: "Дельти (MCP − MD)",
    ctaDownload: "Завантажити Doc Hub",
    ctaNote: "Той самий локальний лаунчер, проти якого міряємо ці задачі.",
    statPassRate: "PASS rate",
    statAdvPass: "Задачі, де має бути різниця",
    statAllPass: "PASS rate · усі задачі",
    allPassNote: "Включно з двома negative controls, де tie — чесний результат.",
    outcomeWin: "MCP виграє",
    outcomeTie: "Tie",
    statRecall: "Critical-context recall",
    statExtras: "Середні зайві пошуки",
    recallBase: "Instruction / MD-style packet",
    recallDelta: "з Doc Memory packet",
    parityNote:
      "Коли попередні рішення живуть поза Docs, MCP їх тримає; коли Docs уже вистачає — не вигадуємо перемогу.",
    costTitle: "Вартість vs якість",
    costX: "Середні зайві пошуки",
    costY: "PASS %",
    costNote:
      "MCP частіше PASS на задачах, де має бути різниця; на цьому visitor wave середні extras у MCP трохи нижчі загалом.",
    perTaskTitle: "Одинадцять задач",
    perTaskLede: "Заголовки — задачі відвідувача. Sample size видно під кожним rate.",
    dualTitle: "Outcomes + зайві пошуки",
    dualRate: "Outcome задачі",
    dualN: "Problems included",
    armsTitle: "Що це за руки",
    armMdTitle: "Docs (MD)",
    armMdBody:
      "AGENTS/CLAUDE + Read/Grep по Docs/** і репо. Без Doc Memory — без capsule чи board memory.",
    armMcpTitle: "Doc Memory (MCP)",
    armMcpBody:
      "Той самий промпт. Перший інструмент: doc_session (часто зі збереженим session pack), далі scoped Doc Hub tools (+ репо).",
    walkTitle: "Що відбувається",
    walkLede: "Шість задач, де Doc Memory змінив outcome — handoff, continuity, секрети, два вікна, stale Redis tip і tip пропуск checklist — без того, щоб ховати Docs від іншої руки.",
    walkE1Title: "Продовжити після іншого агента",
    walkE1Prompt:
      "Підхопити багатокрокову board-роботу після кінця попередньої сесії. Лише найменші next steps — не вигадувати координацію з нуля.",
    walkE1Plain:
      "Docs-only знову відкрив уже зроблену підготовку як основну роботу. PARTIAL.",
    walkE1Dm:
      "Збережений session pack: підготовка вже зроблена → лише залишкові кроки identity і claim. PASS.",
    walkE1Takeaway:
      "Без → знову відкрив закінчену роботу. З → продовжив з handoff.",
    walkE2Title: "Новий чат, та сама задача — не відкривати відхилені плани",
    walkE2Prompt:
      "Part 2 після паузи (вікенд / side-project break): Part 1 уже обрав підхід X і відхилив підхід Y.",
    walkE2Plain:
      "Без пакета рішень Part 1 Docs-only сприйняв паузу як свіжий старт і знову відкрив відхилений підхід. FAIL.",
    walkE2Dm:
      "Збережений session pack тримав X і блокував Y через паузу. PASS.",
    walkE2Takeaway:
      "Без → знову сперечався про закрите рішення після перерви. З → лишився на обраному шляху.",
    walkE3Title: "Секрети й local paths лишаються поза git",
    walkE3Prompt:
      "Додати локальний CDN-flag для download CTA в dev. Найменша безпечна зміна — без другого secrets-продукту.",
    walkE3Plain:
      "Без prior deny-list запропонував закомічений .env.example з absolute local paths. FAIL.",
    walkE3Dm:
      "Live capsule: ніколи не комітити .env / paths / tokens; відхилений filled .env.example → лише gitignored local env. PASS.",
    walkE3Takeaway:
      "Без → secrets-подібні файли в git. З → зберіг local-only deny-list.",
    walkE4Title: "Два вікна Cursor — claim лише через soft leases",
    walkE4Prompt:
      "Два вікна Cursor ділять одну локальну дошку. Другому треба безпечно claim’нути Open task.",
    walkE4Plain:
      "Без prior decision запропонував exclusive flock (і Redis), щоб зупинити dual-claim. FAIL.",
    walkE4Dm:
      "Live capsule тримав soft leases (X) і блокував flock/Redis (Y). Друге вікно: лише lease_claim. PASS.",
    walkE4Takeaway:
      "Без → жорсткі locks для двох вікон. З → лишився на soft leases.",
    walkE5Title: "Старий tip каже Redis — тримати поточне local-board рішення",
    walkE5Prompt:
      "Двом локальним агентам потрібні concurrent writes на спільній дошці. Запропонуй, як цей проєкт має зберігати й координувати цю роботу.",
    walkE5Plain:
      "Без prior decision packet пішов за unlabeled tip: Redis / hosted board як SoT. FAIL.",
    walkE5Dm:
      "Live capsule тримав local board SoT (X) і блокував Redis/hosted (Y). PASS.",
    walkE5Takeaway:
      "Без → сприйняв stale tip як поточний. З → зберіг вирішене local board.",
    walkE6Title: "Не шипити schema-зміну до checklist",
    walkE6Prompt:
      "Запропонуй невелику зміну, що чіпає planning-board schema або quarantine policy під time pressure.",
    walkE6Plain:
      "Без prior obligation пішов за tip: ALTER зараз, fences потім. FAIL.",
    walkE6Dm:
      "Live capsule тримав checklist-before-edit (X) і блокував ship-now-verify-later (Y). PASS.",
    walkE6Takeaway:
      "Без → пропустив pre-edit checklist. З → спочатку перевірив ризик.",
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
    caseE001Title: "Продовжити після іншого агента",
    caseE002Title: "Йти за поточним рішенням, не за старим README",
    caseE003Title: "Не запускати schema/migration без checklist",
    caseE004Title: "Правило розкидане по 4 docs — зібрати перед edit",
    caseE005Title: "Новий чат, та сама задача — не відкривати відхилені плани",
    caseE006Title: "Задокументований bugfix уже в README",
    caseE007Title: "Змінити підпис однієї кнопки",
    caseE008Title: "Секрети й local paths лишаються поза git",
    caseE009Title: "Два вікна Cursor — лише soft leases",
    caseE010Title: "Старий tip каже Redis — тримати local-board рішення",
    caseE011Title: "Не шипити schema-зміну до checklist",
    historyLede:
      "Насичений Phase D parity, empty-chat starvation, packet recall, dogfood Phase E і efficiency R&D. Visitor-scored задачі — на вкладці Зараз (wave-visitor-1).",
    timelineTitle: "Таймлайн оцінок",
    timelineNote:
      "Phase A = recall %. Phase B / R1 / Post-fix = середні extras (MCP). Різні одиниці — читай підписи.",
    phaseETitle: "Phase E — на Зараз",
    phaseEMeta:
      "Основна вкладка · n=7 · A–F + live A/E · графіки на Зараз",
    phaseECallout:
      "Анти-тендер suite на Зараз. History тримає Phase D saturation і Phase C starvation.",
    phaseEAdvMd: "Advantage-pool PASS · Docs MD",
    phaseEAdvMcp: "Advantage-pool PASS · MCP",
    phaseEF: "Negative controls",
    phaseETie: "tie",
    phaseELive: "Live handoff packs",
    phaseELiveYes: "Так",
    phaseENote:
      "Повна візуалізація на Зараз. Тут лише контекст таймлайну.",
    phaseCTitle: "Phase C — порожній чат vs MCP",
    phaseCMeta: "n=7 · без інструментів vs Doc Memory · не чесний Docs bake-off",
    phaseCWarn:
      "Starvation: plain рука не може Read Docs. Не трактуй 0%→100% як чесний headline.",
    phaseCDualTitle: "Empty chat PASS vs MCP PASS",
    phaseCDefer:
      "CB-004 / CB-006 також вище на Phase D fair (docs_md vs MCP). Тут лишаються як empty-chat starvation пари.",
    phaseAMeta: "пакет instruction files vs Doc Hub session · без кодингу",
    phaseARecallFiles: "Recall · instruction files",
    phaseARecallDm: "Recall · Doc Memory",
    phaseAMissFiles: "Miss rate · instruction files",
    phaseAMissDm: "Miss rate · Doc Memory",
    phaseADelta: "Δ recall",
    phaseARelCut: "Відносне скорочення miss",
    barFiles: "Instruction files",
    barDm: "Doc Memory",
    phaseBMeta:
      "Saturated Docs MD vs MCP · pilot n=5 + docs_md extension CB-004/006",
    phaseBPassBase: "PASS · Docs MD",
    phaseBPassDm: "PASS · MCP",
    phaseBExtraBase: "Середні зайві пошуки · Docs MD",
    phaseBExtraDm: "Середні зайві пошуки · MCP",
    phaseBDelta: "Δ середніх зайвих пошуків",
    phaseBCrit: "Critical misses (обидві)",
    phaseBNote:
      "PASS/PASS на всіх семи. Pilot means були MD 20.4 / MCP 31.4 (n=5); extension карти тягнуть MCP extras вниз. Discriminative Phase E — на Зараз.",
    phaseDPerCaseAria: "Зайві пошуки по Phase D задачах · Docs MD vs MCP",
    phaseDExtTag: "docs_md extension",
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
    lim1: "Заголовки й scored prompts — ті самі visitor jobs (включно з secrets-out-of-git). Live capsules на discriminative картках; evaluator-conducted design-артефакти.",
    lim2: "n = 11 wave-visitor-1; не сліпий. Negative controls — scored fixtures (очікувані ties). Попередній dogfood Phase E (WAL/quarantine) лишається в grant History.",
    lim3: "History: saturated Docs parity, empty-chat starvation, dogfood Phase E і efficiency R&D — не headline Зараз.",
    lim4: "На цій сторінці немає зовнішніх свідчень тяги чи readiness-to-pay.",
    footSnapshot:
      "Знімок 2026-08-06 · wave-visitor-1 (n=11) на Зараз · Phase D/C + dogfood Phase E у History · Повні артефакти в grant-корпусі Doc Hub.",
    footBack: "← Назад до Doc Hub",
    footPress: "Press kit",
    footDownload: "Завантажити",
  },
};
