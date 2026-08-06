/** English (source) catalog — keep shape in sync with uk.ts */
export const en = {
  seo: {
    homeTitle: "Doc Hub — local-first launcher for docs & planning",
    homeDescription:
      "Free offline-first solo-dev launcher: workspaces, docs browser, planning board, and extensions — no cloud required for the baseline. macOS, Windows, Linux.",
    docsTitle: "Docs — how to use Doc Hub",
    docsDescription:
      "Install Doc Hub, open a Docs/ workspace, connect agents via dm / MCP, and use the tool map for session, fence, orbit, and planning.",
    benchmarkTitle: "Context Benchmark — Docs MD vs Doc Memory MCP",
    benchmarkDescription:
      "Fair bake-off on a Docs-SoT project: Read/Grep Markdown vs Doc Memory MCP. PASS parity, packet recall, and access cost. History holds empty-chat starvation.",
  },
  nav: {
    ariaPrimary: "Primary",
    how: "How",
    screens: "Screens",
    workflow: "Workflow",
    packs: "Packs",
    docs: "Docs",
    benchmark: "Benchmark",
    support: "Support",
    share: "Share",
    faq: "FAQ",
    download: "Download",
    home: "Home",
    langLabel: "Language",
  },
  hero: {
    headline: "Your repos. Your docs. One local launcher.",
    lede: "Offline-first planning, docs, and extensions for solo builders — free on the baseline, no cloud required.",
    stageAriaOpen: "Open Task board screenshot fullscreen",
    stageAlt: "Doc Hub task board",
  },
  how: {
    title: "How it works",
    lede: "Three steps from empty desk to a live local launcher.",
    step1Title: "Download",
    step1Body: "Grab the macOS, Windows, or Linux build. No account required.",
    step2Title: "Point at a workspace",
    step2Body:
      "Pick any folder with Docs/ — Doc Hub indexes it locally on your machine.",
    step3Title: "Plan and ship",
    step3Body:
      "Use the board, docs browser, and Trophy Room. Everything stays offline-first.",
  },
  screens: {
    title: "See it in the wild",
    lede: "Board, dashboard, milestones, Orbit, glossary, MCP history, Trophy Room — click any shot to enlarge.",
    openAria: "Open {caption} fullscreen",
    close: "Close",
    previous: "Previous",
    next: "Next",
    previousAria: "Previous screenshot",
    nextAria: "Next screenshot",
    taskBoardCaption: "Task board",
    taskBoardAlt:
      "Doc Hub task board with Open, In Progress, Code Review, QA, and Deferred columns",
    dashboardCaption: "Dashboard",
    dashboardAlt:
      "Doc Hub dashboard overview with workspace status and planning signals",
    dashboardAuditCaption: "Dashboard audit",
    dashboardAuditAlt:
      "Doc Hub dashboard audit view with task counts, doc index, and codebase health",
    milestonesCaption: "Milestones",
    milestonesAlt:
      "Doc Hub milestones view for roadmap phases and delivery checkpoints",
    orbitMapCaption: "Orbit map",
    orbitMapAlt:
      "Doc Hub Orbit map showing domain relationships across the workspace",
    livingGlossaryCaption: "Living Glossary",
    livingGlossaryAlt:
      "Doc Hub Living Glossary with shared product terms and definitions",
    mcpHistoryCaption: "MCP history",
    mcpHistoryAlt:
      "Doc Hub MCP history of agent tool calls and doc-memory activity",
    trophyRoomCaption: "Trophy Room",
    trophyRoomAlt:
      "Doc Hub Trophy Room with levels, XP, streaks, and weekly quests",
  },
  workflow: {
    eyebrow: "CONTROLLED AI-ASSISTED WORK",
    title: "Give agents context. Keep delivery accountable.",
    lede: "Doc Hub helps turn AI-assisted work into a controlled engineering loop: relevant context first, explicit scope during implementation, and human verification before delivery.",
    taskTitle: "Task",
    taskBody: "Defined intent and scope",
    contextTitle: "Relevant context",
    contextBody: "Docs, decisions, and task links",
    scopedTitle: "Scoped agent work",
    scopedBody: "Work stays inside clear boundaries",
    reviewTitle: "Review & checks",
    reviewBody: "Impact, tests, and audit",
    deliveryTitle: "Safe delivery",
    deliveryBody: "Human-verified outcome",
    relevantTitle: "Relevant, not exhaustive context",
    relevantBody:
      "Task-specific documentation sessions and linked project knowledge keep the working set focused.",
    riskTitle: "Risk made visible",
    riskBody:
      "Scoped code-health signals, impact analysis, and quarantine fences help expose fragile areas before a change expands.",
    handoffsTitle: "Handoffs that retain context",
    handoffsBody:
      "Work Capsules preserve a session pack and a stop note, then check freshness before work resumes.",
    verificationTitle: "Verification stays human",
    verificationBody:
      "Post-work audit prompts surface architecture risks, missing tests, documentation drift, and items that should not ship.",
    close: "AI is an accelerator inside a disciplined engineering process — not a substitute for engineering judgment.",
  },
  features: {
    title: "What you get",
    localTitle: "Local workspaces",
    localBody:
      "Point Doc Hub at any repo. Docs, planning, and tools stay on your machine.",
    boardTitle: "Planning board",
    boardBody:
      "Tasks, milestones, and trail — free forever on the baseline, offline-ready.",
    extensionsTitle: "Extensions without lock-in",
    extensionsBody:
      "Language adapters and private plugins sit on open contracts. The core stays yours.",
  },
  packs: {
    eyebrow: "First-party Plugin Store",
    title: "Packs that stay on your machine",
    lede: "Free adapters ship with the catalog. Paid packs are optional — the launcher stays free, offline, and yours.",
    tierFree: "free",
    tierPaid: "paid",
    includedMeta: "Included in catalog",
    ctaEmailLicense: "Email for license · ${price}",
    ctaNotify: "Notify me · ${price}",
    earlyAria: "Early license offer",
    earlyKicker: "Early access · until {date}",
    earlyBody:
      "Want a paid-pack license before checkout ships? Email {email} with the pack name — we'll send a key. After {date}, licenses go through normal paid checkout.",
    tsName: "JavaScript / TypeScript adapter",
    tsBlurb: "Maps Node/TS tooling into platform events.",
    unityName: "Unity / C# adapter",
    unityBlurb: "Maps Unity Editor activity into platform events.",
    visualShipName: "Visual Ship Gate",
    visualShipBlurb:
      "Playwright shots, baseline diffs, and CI gates for local web UI routes — $15 one-time.",
    dtjName: "DTJ Trace Gate",
    dtjBlurb:
      "Portable .dtj sessions, TraceQL explore, MCP analyze, and incident bundles for board/CI — $25 one-time.",
  },
  support: {
    title: "Support the author",
    lede: "Doc Hub's free baseline stays free. Patreon is a tip jar for studio work — packs check out separately (or by email until 1 September 2026 — see Packs).",
    packsLink: "Packs",
    feedback: "Feedback, bugs, or early pack license:",
    badgePopular: "Popular",
    ctaJoin: "Join on Patreon",
    note: "Higher tiers include everything below them. No pack unlocks here.",
    priceUnit: "/mo",
    sparkBlurb: "Thanks — and access to the supporter feed.",
    emberBlurb: "Plus a monthly studio thank-you note.",
    patronBlurb: "Plus early changelog / build notes for Doc Hub & studio.",
    anvilBlurb: "Plus your name on a future Supporters wall.",
    foundingBlurb: "Plus a soft vote on what to prioritize next.",
    papaBlurb: "Plus a personal thanks credit in a release note when relevant.",
  },
  whatsNew: {
    title: "What's new in 0.1.0",
    lede: "First public channel for the free launcher — private source, public binaries.",
    item1: "Doc Hub branding and closed-core distribution",
    item2: "macOS, Windows, and Linux installers on the CDN path",
    item3: "In-app auto-update via signed latest.json",
    item4: "Marketing site with product screens and SEO basics",
    note: "Unsigned builds may need an OS trust click — details in the FAQ.",
  },
  promo: {
    title: "Share it",
    lede: "Local-first docs & planning — free baseline, no cloud required. Grab the Board shot or OG image and post.",
    ctaPress: "Open press kit",
    ctaBoardShot: "Download Board shot",
    ctaOg: "Download OG",
    shareBlurb:
      "Doc Hub — local-first launcher for docs & planning.\nFree baseline, no cloud required.\nhttps://dochub-site.pages.dev",
  },
  waitlist: {
    title: "Get notified",
    ledeNoFormBefore: "Builds are live on the",
    ledeNoFormAfter: "section.",
    earlyLicense:
      "For early paid-pack licenses (until {date}), email {email}.",
    downloadLink: "Download",
    ledeWithForm:
      "Builds are rolling out. Leave an email and we'll tell you when Doc Hub is ready to download.",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    submit: "Notify me",
    submitting: "Sending…",
    success: "You're on the list — we'll ping you when a build is ready.",
    error: "Couldn't submit right now. Try again in a moment.",
  },
  faq: {
    title: "FAQ",
    q1: "Is Doc Hub free?",
    a1: "Yes. The free launcher baseline — workspaces, docs, planning board, local analytics — stays free. No mandatory subscription for essential project access.",
    q2: "Does it need the cloud?",
    a2: "No. Core workflows are local-first and work offline. Cloud sync is not part of the free baseline.",
    q3: "Which platforms are supported?",
    a3: "macOS (Apple Silicon), Windows, and Linux installers from this site's Download section. Intel Mac builds are not published yet.",
    q4: "macOS says the developer cannot be verified — what do I do?",
    a4: "For unsigned builds: right-click the app → Open → Open. Apple notarization is optional for later releases.",
    q5: "Is the source code open?",
    a5: "The application is closed core. Extension contracts are published for adapters and plugins. Installers are distributed separately from the private source repository.",
    q6: "What are the paid packs?",
    a6: "Optional one-time packs: Visual Ship Gate ($15) for browser UI screenshot gates, and DTJ Trace Gate ($25) for portable .dtj session explore/analyze and incident bundles. The free launcher baseline stays free.",
    q7: "How do I get a pack license before checkout?",
    a7: "Until 1 September 2026, email priymak615@gmail.com with the pack name (Visual Ship Gate or DTJ Trace Gate) and we will send an early license key. After that date, packs use normal paid checkout.",
  },
  download: {
    title: "Get Doc Hub",
    lede: "Free baseline forever. Pick your OS — installers come from our CDN (macOS is Apple Silicon for now).",
    ctaPrimary: "Download for {os}",
    ctaAllPlatforms: "All platforms",
    ctaAllReleases: "All releases",
    platformsAria: "Downloads by platform",
    osMac: "macOS (Apple Silicon)",
    osWin: "Windows",
    osLinux: "Linux",
    osOther: "your OS",
    hintCdn: "Downloads are served from our CDN (counted per OS).",
    hintMac:
      "Apple Silicon DMG. Unsigned: right-click → Open → Open. Intel Mac builds are not published yet.",
    hintWin: "Unsigned builds: SmartScreen → More info → Run anyway.",
  },
  social: {
    navLabel: "Carlo Forge on social",
    lede: "Follow Carlo Forge — updates on Telegram, X, and Patreon.",
  },
  footer: {
    tagline: "Closed core · downloads counted on our CDN",
    privacy: "Privacy",
    press: "Press",
    docs: "Docs",
    benchmark: "Benchmark",
    support: "Support",
    notify: "Notify",
    download: "Download",
  },
  docs: {
    crumbHome: "← Doc Hub",
    crumbCurrent: " · Docs",
    title: "How to use Doc Hub",
    lede: "Guide for the free launcher — install, workspace, daily loop, agents, and the dm / doc-memory tool surface agents actually call. No account required.",
    tocLabel: "On this page",
    installTitle: "1. Install",
    installStep1Title: "Download your OS build",
    installStep1Body:
      "Use the Download section on this site. Installers come from our CDN — macOS is Apple Silicon for now; Windows and Linux are also published.",
    installStep2Title: "Open the app once",
    installStep2Body:
      "No sign-in. If the OS blocks an unsigned build, follow the Trust section below — then open again.",
    installStep3Title: "Keep it updated",
    installStep3Body:
      "In-app auto-update uses a signed latest.json channel when a newer build is available.",
    installCta: "Go to Download",
    workspaceTitle: "2. Open a workspace",
    workspaceBody:
      "Point Doc Hub at a project folder. Prefer a tree that already has a Docs/ directory — that is what the local index and agent sessions lean on.",
    workspaceLi1:
      "Docs stay on your machine. Indexing is local; the free baseline does not require cloud sync.",
    workspaceLi2:
      "Planning state lives under .dochub/ in the workspace (SQLite board). Do not invent a second board DB at the repo root.",
    workspaceLi3:
      "You can switch workspaces later — each folder keeps its own local board and doc index.",
    workspaceExample:
      "dm init\ndm info\ndm doctor\ndm use my-project",
    dailyTitle: "3. Daily loop",
    dailyBody:
      "Treat Doc Hub as the local control surface for the project — not a cloud IDE.",
    dailyBoardTitle: "Planning board",
    dailyBoardBody:
      "Track Open → In Progress → review → done. Milestones and trail keep delivery visible without a SaaS board.",
    dailyDocsTitle: "Docs browser",
    dailyDocsBody:
      "Browse and search project Docs without dumping whole files into every chat. Prefer short, task-shaped packets.",
    dailyOrbitTitle: "Orbit & glossary",
    dailyOrbitBody:
      "Use domain maps and shared terms so agents and humans mean the same thing when a word shows up in tasks.",
    agentsTitle: "4. Agents & MCP",
    agentsBody:
      "Doc Hub ships the dm CLI and a doc-memory MCP server. Cursor (or another MCP client) should call those tools instead of dumping whole Docs/ into context.",
    agentsStep1Title: "Init + Agents pack",
    agentsStep1Body:
      "Run dm init in the workspace (or Workspace Doctor → Init in the app). That creates .dochub/workspace.sqlite, indexes Docs/, and syncs the Agents pack under ~/.config/doc-hub/agents/.",
    agentsStep2Title: "Connect MCP in your editor",
    agentsStep2Body:
      "In Cursor: Settings → MCP → enable the Doc Hub / doc-memory server from the app or Agents pack. Keep tokens local — never commit them.",
    agentsStep3Title: "Start with a session packet",
    agentsStep3Body:
      "Ask the agent to begin with dm session / doc_session for the task. Deepen with chain, section, or search only as needed — not a full-repo Read first.",
    agentsExample:
      "dm session \"fix download CTA copy\" --domain wires\ndm chain \"download band CTAs\"\ndm section getting-started.md \"Quick start\"",
    agentsCalloutStrong: "Agents accelerate; you verify.",
    agentsCalloutBody:
      "Use impact checks, tests, and human review before ship. Full tool map:",
    agentsToolsLink: "dm & MCP tools ↓",
    toolsTitle: "5. dm & MCP tools",
    toolsLede:
      "There are many tools on purpose — grouped by job. Prefer the smallest packet that answers the task. dm is the CLI mirror of the MCP server (doc-memory).",
    toolsMirrorStrong: "Same surface, two doors.",
    toolsMirrorBody:
      "dm session ≈ MCP doc_session. dm fence check ≈ fence_check. If the agent only has MCP, use the MCP names; in a terminal, use dm.",
    toolsMcpLabel: "MCP:",
    toolsBootTitle: "Bootstrap",
    toolsBootBody:
      "Create/migrate the local board DB, check index health, and sync skills/rules into Cursor / Claude / Codex homes.",
    toolsBootCmds:
      "dm init\ndm info\ndm doctor\ndm agents status|update\ndm skills status|update",
    toolsBootMcp: "doc_init_project · doc_info · doc_doctor · doc_agents_* · doc_skills_*",
    toolsLookupTitle: "Docs lookup (start here in agent chats)",
    toolsLookupBody:
      "Route a task to Docs without reading whole canon files. session is the usual one-shot entry; section/brief deepen a single heading.",
    toolsLookupCmds:
      "dm session \"…\" [--domain …]\ndm chain \"…\"\ndm route \"…\"\ndm search \"…\"\ndm section path.md \"Heading\"\ndm brief path.md\ndm stale",
    toolsLookupMcp:
      "doc_session · doc_chain · doc_route · doc_search · doc_section · doc_brief · doc_stale_check · doc_starter · doc_depth · doc_map_section",
    toolsReposTitle: "Workspaces & constellation",
    toolsReposBody:
      "Aliases point at registered repos. Switch focus with use. Groups (constellation) fan out read-only tools across related repos.",
    toolsReposCmds:
      "dm list\ndm use <alias>\ndm rename <alias> <new>\ndm group list|create|…",
    toolsReposMcp:
      "doc_list_repos · doc_use_repo · doc_rename_repo · group_* / constellation tools",
    toolsSafetyTitle: "Safety before edit",
    toolsSafetyBody:
      "Orbit path boundaries, quarantine fences, blast-radius surfaces, stop-lines, and confidence zones — check before expanding a fragile path.",
    toolsSafetyCmds:
      "dm orbit of <path>\ndm orbit gate\ndm fence check <path> …\ndm fence gate\ndm blast match <path>\ndm stop evaluate\ndm confidence match <path>",
    toolsSafetyMcp:
      "orbit_* · fence_* · blast_* · stop_* · confidence_*",
    toolsHandoffTitle: "Continuity & research",
    toolsHandoffBody:
      "Freeze a session, hand off to another person/repo, track open questions, debt, findings, glossary, and rituals.",
    toolsHandoffCmds:
      "dm capsule capture|resume …\ndm briefcase create|seal|export …\ndm question list|create …\ndm debt create|list …\ndm finding list|create …\ndm glossary lookup …\ndm ritual list|due",
    toolsHandoffMcp:
      "capsule_* · briefcase_* · question_* · debt_* · finding_* · glossary_* · ritual_*",
    toolsCraftTitle: "Shape, friction, audit",
    toolsCraftBody:
      "Dry-run file/folder splits, scan agent friction from MCP history, and generate a post-work audit prompt for a board task.",
    toolsCraftCmds:
      "dm shape plan <path>\ndm shape folder <dir>\ndm friction scan\ndm history\ndm audit-prompt <task_id>",
    toolsCraftMcp:
      "shape_* · friction_* · doc_history · audit_prompt_get",
    toolsOpsTitle: "Extensions, license, serve",
    toolsOpsBody:
      "Extension registry, visibility fences, capability consent, pack licenses, and long-lived workers for the launcher.",
    toolsOpsCmds:
      "dm extension …\ndm visibility …\ndm consent …\ndm license …\ndm mcp\ndm serve\ndm legacy list|clean",
    toolsOpsMcp:
      "extension_* · visibility / consent tools · license_* · MCP stdio / worker serve",
    toolsBoardTitle: "Planning board (MCP)",
    toolsBoardBody:
      "Tasks, epics, milestones, attachments, leases, and close/export live primarily as MCP planning tools while the launcher is connected — same .dochub/workspace.sqlite the UI uses.",
    toolsBoardMcp:
      "task_* · epic_* · milestone_* · attachment_* · lease_* · planning_* · backlog_import · board_writers",
    toolsMapTitle: "Full dm command map",
    toolsMapBody:
      "Top-level dm subcommands (run dm <cmd> -h for flags). MCP exposes the same jobs under doc_* / family_* names.",
    toolsMapCmds:
      "info doctor init legacy list use rename group\nextension visibility consent\nsession chain route search section brief stale history\norbit fence capsule briefcase question blast confidence finding stop debt glossary ritual friction shape\naudit-prompt agents skills license mcp serve",
    toolsMapHint: "Tip: dm --help prints this live from your installed CLI.",
    packsTitle: "6. Packs",
    packsBody:
      "The free launcher baseline stays free. Optional one-time packs add gates (browser UI shots, DTJ traces) without locking the core.",
    packsLi1:
      "Free adapters (TypeScript, Unity, …) ship in the first-party store catalog.",
    packsLi2:
      "Paid packs: Visual Ship Gate and DTJ Trace Gate — see Packs on the home page for prices.",
    packsLi3:
      "Until 1 September 2026 you can email for an early license key; after that, normal checkout.",
    packsCta: "See Packs",
    trustTitle: "7. OS trust (unsigned builds)",
    trustBody:
      "Early channel builds may not be notarized yet. That is an OS gate, not a Doc Hub login wall.",
    trustLi1: "macOS: right-click the app → Open → Open.",
    trustLi2: "Windows: SmartScreen → More info → Run anyway.",
    trustLi3: "Linux: follow your distro’s policy for downloaded AppImages / packages.",
    helpTitle: "8. Help",
    helpBody:
      "Bugs, feedback, or early pack licenses — email works. FAQ on the home page covers pricing, platforms, and source policy.",
    helpFaq: "FAQ",
    helpBenchmark: "Context Benchmark",
    footBack: "← Back to Doc Hub",
    footDownload: "Download",
  },
  benchmark: {
    crumbHome: "← Doc Hub",
    crumbCurrent: " · Context Benchmark",
    title: "Context Benchmark",
    lede: "Same agent prompts — Docs alone vs Docs plus Doc Memory. Charts first by job category; open any job for the without → with story. Saturated parity and starvation demos live under History.",
    tabsAria: "Benchmark views",
    tabNow: "Now",
    tabHistory: "History",
    labelMd: "Docs (MD)",
    labelMcp: "Doc Memory (MCP)",
    labelMdShort: "MD",
    labelMcpShort: "MCP",
    labelEmptyShort: "Empty",
    labelWithout: "Without Doc Memory",
    labelWith: "With Doc Memory",
    labelWithoutShort: "Without",
    labelWithShort: "With",
    labelBefore: "before",
    labelAfter: "after",
    nowMeta: "n=11 visitor jobs · wave-visitor-1 · live capsules · locked scoring",
    badgesAria: "Suite badges",
    badgeLive: "Live capsules",
    badgeAdv: "Advantage-pool MCP PASS",
    fairCallout:
      "Fair bake-off: both arms reach the repo Docs. Ties are allowed when Docs already answer the job. Not “empty chat vs tools.”",
    chartsTitle: "Suite charts",
    chartsLede: "PASS rate by job category, then advantage-pool and cost vs quality for the whole wave.",
    catChartTitle: "PASS rate by category",
    catChartNote:
      "Each group is a visitor job category. MD and MCP are scored on the same prompts.",
    jobsTitle: "Jobs by category",
    jobsLede: "Open a job for the without → with story and per-task metrics.",
    jobsCount: "jobs",
    jobOpen: "Details",
    modalClose: "Close",
    modalMetrics: "Per-task metrics",
    modalCrit: "Critical misses",
    modalNoWalk: "No walkthrough story for this job — outcomes and extras below.",
    catHandoff: "Continue after another agent",
    catHandoffShort: "Handoff",
    catContinuity: "New chat after a pause",
    catContinuityShort: "Continuity",
    catSecrets: "Secrets / paths out of git",
    catSecretsShort: "Secrets",
    catTwoWindows: "Two Cursor windows",
    catTwoWindowsShort: "Two windows",
    catStaleDocs: "Stale tip vs current decision",
    catStaleDocsShort: "Stale tip",
    catChecklist: "Checklist before schema change",
    catChecklistShort: "Checklist",
    catScattered: "Rule scattered across docs",
    catScatteredShort: "Scattered",
    catTies: "Honest ties — Docs already enough",
    catTiesShort: "Ties",
    nowNote:
      "Visitor wave-visitor-1: Doc Memory recovered prior decisions Docs-only missed on handoff, continuity, secrets, two-window leases, a stale Redis tip, and a ship-now-skip-checklist tip (live capsules). Suite still includes honest PASS/PASS nulls and two F ties. Evaluator-conducted design artifacts.",
    deltaTitle: "Deltas (MCP − MD)",
    ctaDownload: "Download Doc Hub",
    ctaNote: "Same local launcher these jobs measure against.",
    statPassRate: "PASS rate",
    statAdvPass: "Jobs that should differ",
    statAllPass: "PASS rate · all jobs",
    allPassNote: "Includes two negative controls where a tie is the honest result.",
    outcomeWin: "MCP wins",
    outcomeTie: "Tie",
    statRecall: "Critical-context recall",
    statExtras: "Mean extra lookups",
    recallBase: "Instruction / MD-style packet",
    recallDelta: "with Doc Memory packet",
    parityNote:
      "When prior decisions live outside Docs, MCP keeps them; when Docs already suffice, we do not invent a win.",
    costTitle: "Cost vs quality",
    costX: "Mean extra lookups",
    costY: "PASS %",
    costNote:
      "MCP passes more of the jobs that should differ; on this visitor wave mean extras are slightly lower for MCP overall.",
    perTaskTitle: "The eleven jobs",
    perTaskLede: "Titles are visitor jobs. Sample size stays visible under each rate.",
    dualTitle: "Outcomes + extra lookups",
    dualRate: "Task outcome",
    dualN: "Problems included",
    armsTitle: "What each arm is",
    armMdTitle: "Docs (MD)",
    armMdBody:
      "AGENTS/CLAUDE + Read/Grep on Docs/** and the repo. No Doc Memory — no capsule or board memory reads.",
    armMcpTitle: "Doc Memory (MCP)",
    armMcpBody:
      "Same prompt. First tool: doc_session (often with a saved session pack), then scoped Doc Hub tools (+ repo reads).",
    walkTitle: "What happens",
    walkLede: "Six jobs where Doc Memory changed the outcome — handoff, continuity, secrets, two windows, a stale Redis tip, and a skip-checklist tip — without hiding Docs from the other arm.",
    walkE1Title: "Continue after another agent left",
    walkE1Prompt:
      "Pick up multi-step board work after a prior session ended. Smallest next steps only — do not reinvent coordination from scratch.",
    walkE1Plain:
      "Docs-only treated finished setup work as still open and restarted it. PARTIAL.",
    walkE1Dm:
      "Saved session pack: setup already done → only the remaining identity and claim steps. PASS.",
    walkE1Takeaway:
      "Without → reopened finished work. With → continued from the handoff.",
    walkE2Title: "New chat, same task — don’t reopen rejected plans",
    walkE2Prompt:
      "Part 2 after a pause (weekend / side-project break): Part 1 already chose approach X and rejected approach Y.",
    walkE2Plain:
      "Without Part 1’s decision packet, Docs-only treated the pause like a fresh start and reopened the rejected approach. FAIL.",
    walkE2Dm:
      "Saved session pack kept X and blocked Y across the pause. PASS.",
    walkE2Takeaway:
      "Without → re-litigated a closed decision after time away. With → stayed on the chosen path.",
    walkE3Title: "Keep secrets and local paths out of git",
    walkE3Prompt:
      "Add a local CDN flag for a download CTA in dev. Smallest safe change — do not invent a second secrets product.",
    walkE3Plain:
      "Without the prior deny-list, proposed a committed .env.example filled with absolute local paths. FAIL.",
    walkE3Dm:
      "Live capsule: never commit .env / paths / tokens; rejected filled .env.example → gitignored local env only. PASS.",
    walkE3Takeaway:
      "Without → secrets-shaped files into git. With → kept the local-only deny-list.",
    walkE4Title: "Two Cursor windows — claim with soft leases only",
    walkE4Prompt:
      "Two Cursor windows share one local board. The second window needs to claim an Open task safely.",
    walkE4Plain:
      "Without the prior decision, proposed exclusive flock (and Redis) to stop dual-claim races. FAIL.",
    walkE4Dm:
      "Live capsule kept soft leases (X) and blocked flock/Redis (Y). Second window: lease_claim only. PASS.",
    walkE4Takeaway:
      "Without → hard locks for two windows. With → stayed on soft leases.",
    walkE5Title: "Old tip says Redis — keep the current local-board decision",
    walkE5Prompt:
      "Two local agents need concurrent writes on the shared board. Propose how this project should store and coordinate that work.",
    walkE5Plain:
      "Without the prior decision packet, followed an unlabeled tip: Redis / hosted board as SoT. FAIL.",
    walkE5Dm:
      "Live capsule kept local board SoT (X) and blocked Redis/hosted (Y). PASS.",
    walkE5Takeaway:
      "Without → treated a stale tip as current. With → kept the decided local board.",
    walkE6Title: "Don’t ship a schema change before the checklist",
    walkE6Prompt:
      "Propose a small change that touches planning-board schema or quarantine policy under time pressure.",
    walkE6Plain:
      "Without the prior obligation, followed a tip: ship the ALTER now, verify fences later. FAIL.",
    walkE6Dm:
      "Live capsule kept checklist-before-edit (X) and blocked ship-now-verify-later (Y). PASS.",
    walkE6Takeaway:
      "Without → skipped the pre-edit checklist. With → checked risk first.",
    walk1Title: "Shared local board",
    walk1Prompt:
      "Coordinate Tauri, dm, MCP, and the Python worker on one .dochub/workspace.sqlite.",
    walk1Plain:
      "Read multi-command guide + ADR 0004 via Grep/Read; recovered LOCK / IDENTITY / HANDOFF. PASS.",
    walk1Dm:
      "doc_session → same guide + ADR; recovered LOCK / IDENTITY / HANDOFF. PASS (more follow-up fetches).",
    walk1Takeaway:
      "On Docs-SoT work both arms can PASS; the difference is access path and cost, not empty vs full context.",
    walk2Title: "Unity pin without breaking Doc Hub",
    walk2Prompt:
      "Unity Cursor windows need Doc Hub MCP on Unity without breaking the doc-hub window.",
    walk2Plain:
      "Found per-project mcp.json / registry notes in Docs via Read/Grep. PASS.",
    walk2Dm:
      "doc_session + Docs recovered per-project pins / coexistence. PASS.",
    walk2Takeaway:
      "Fair test: both can read the policy. MCP is not the only way to find it when Docs are already on disk.",
    walk3Title: "Advisory task leases",
    walk3Prompt:
      "Add task leases so two agents are less likely to take the same board task. Keep coordination soft.",
    walk3Plain:
      "Invented exclusive locks / Redis; fail-closed writes instead of advisory TTL.",
    walk3Dm:
      "Recovered P29 soft lease_claim / peek / release on the same local board. PASS.",
    walk3Takeaway:
      "Empty-chat starvation (History) — not part of the fair Now suite.",
    walk4Title: "Visibility fence SoT",
    walk4Prompt:
      "Wire visibility fence as SoT and connect setFenceDenyList through Settings and MCP roots.",
    walk4Plain:
      "Collapsed into quarantine fence_check; left MCP roots optional.",
    walk4Dm:
      "ADR 0001 §F launcher visibility_fence + hydrate setFenceDenyList. PASS.",
    walk4Takeaway:
      "Empty-chat starvation (History) — not part of the fair Now suite.",
    case001Title: "Shared local board",
    case002Title: "SQLite busy / WAL",
    case004Title: "Advisory task leases",
    case005Title: "ADR runtime truth",
    case006Title: "Visibility fence SoT",
    case007Title: "Unity MCP pin",
    case011Title: "Quarantine fence",
    caseE001Title: "Continue after another agent left",
    caseE002Title: "Follow the current decision, not the old README",
    caseE003Title: "Don’t run a schema/migration without the checklist",
    caseE004Title: "Rule is scattered across 4 docs — assemble before editing",
    caseE005Title: "New chat, same task — don’t reopen rejected plans",
    caseE006Title: "Documented bugfix already in README",
    caseE007Title: "Change one button label",
    caseE008Title: "Keep secrets and local paths out of git",
    caseE009Title: "Two Cursor windows — soft leases only",
    caseE010Title: "Old tip says Redis — keep the local-board decision",
    caseE011Title: "Don’t ship a schema change before the checklist",
    historyLede:
      "Saturated Phase D parity, empty-chat starvation, packet recall, dogfood Phase E, and efficiency R&D. Visitor-scored Now jobs are on the Now tab (wave-visitor-1).",
    timelineTitle: "Evaluation timeline",
    timelineNote:
      "Phase A = recall %. Phase B / R1 / Post-fix = mean extra lookups (MCP). Mixed units — read labels.",
    phaseETitle: "Phase E — on Now",
    phaseEMeta:
      "Primary tab · n=7 · A–F + live A/E · see Now for charts",
    phaseECallout:
      "Anti-tender suite promoted to Now. History keeps Phase D saturation and Phase C starvation.",
    phaseEAdvMd: "Advantage-pool PASS · Docs MD",
    phaseEAdvMcp: "Advantage-pool PASS · MCP",
    phaseEF: "Negative controls",
    phaseETie: "tie",
    phaseELive: "Live handoff packs",
    phaseELiveYes: "Yes",
    phaseENote:
      "Full viz on Now. Here for timeline context only.",
    phaseCTitle: "Phase C — empty chat vs MCP",
    phaseCMeta: "n=7 · no tools vs Doc Memory · not a fair Docs bake-off",
    phaseCWarn:
      "Starvation contrast: plain arm cannot Read Docs. Do not treat 0%→100% as the fair headline.",
    phaseCDualTitle: "Empty chat PASS vs MCP PASS",
    phaseCDefer:
      "CB-004 / CB-006 also appear above on Phase D fair (docs_md vs MCP). Here they remain empty-chat starvation pairs.",
    phaseAMeta: "instruction-file packet vs Doc Hub session packet · no coding",
    phaseARecallFiles: "Recall · instruction files",
    phaseARecallDm: "Recall · Doc Memory",
    phaseAMissFiles: "Miss rate · instruction files",
    phaseAMissDm: "Miss rate · Doc Memory",
    phaseADelta: "Δ recall",
    phaseARelCut: "Relative miss cut",
    barFiles: "Instruction files",
    barDm: "Doc Memory",
    phaseBMeta:
      "Saturated Docs MD vs MCP · pilot n=5 + docs_md extension CB-004/006",
    phaseBPassBase: "PASS · Docs MD",
    phaseBPassDm: "PASS · MCP",
    phaseBExtraBase: "Mean extra lookups · Docs MD",
    phaseBExtraDm: "Mean extra lookups · MCP",
    phaseBDelta: "Δ mean extra lookups",
    phaseBCrit: "Critical misses (both)",
    phaseBNote:
      "PASS/PASS on all seven. Pilot means were MD 20.4 / MCP 31.4 (n=5); extension cards pull MCP extras down. Discriminative Phase E is on Now.",
    phaseDPerCaseAria: "Extra lookups per Phase D task · Docs MD vs MCP",
    phaseDExtTag: "docs_md extension",
    cb001Meta: "Same prompt · Doc Memory extra lookups after a bounded routing/session fix",
    cb001Before: "Extra lookups · CB-001",
    cb001After: "Extra lookups · CB-001-R1",
    cb001Reduction: "Relative reduction",
    cb001Outcome: "Outcome",
    postFixMeta: "Doc Memory only · three session/retrieval fixes · Baseline not re-run",
    postFixBefore: "Mean extra lookups · before fixes",
    postFixAfter: "Mean extra lookups · after fixes",
    postFixReduction: "Relative reduction",
    postFixPerCaseAria: "Extra lookups per task before → after",
    limitationsTitle: "Limitations",
    lim1: "Now titles and scored prompts are the same visitor jobs (including secrets-out-of-git). Live capsules on discriminative cards; evaluator-conducted design artifacts.",
    lim2: "n = 11 wave-visitor-1; not blind. Negative controls are scored fixtures (expected ties). Prior dogfood Phase E (WAL/quarantine) stays in grant History.",
    lim3: "History: saturated Docs parity, empty-chat starvation, dogfood Phase E, and efficiency R&D — not the Now headline.",
    lim4: "No external traction or willingness-to-pay evidence on this page.",
    footSnapshot:
      "Snapshot 2026-08-06 · wave-visitor-1 (n=11) on Now · Phase D/C + dogfood Phase E in History · Full artifacts in the Doc Hub grant corpus.",
    footBack: "← Back to Doc Hub",
    footPress: "Press kit",
    footDownload: "Download",
  },
} as const;

export type Messages = {
  [K in keyof typeof en]: {
    [P in keyof (typeof en)[K]]: string;
  };
};
