/** English (source) catalog — keep shape in sync with uk.ts */
export const en = {
  seo: {
    homeTitle: "Doc Hub — local-first launcher for docs & planning",
    homeDescription:
      "Free offline-first solo-dev launcher: workspaces, docs browser, planning board, and extensions — no cloud required for the baseline. macOS, Windows, Linux.",
    docsTitle: "Docs — how to use Doc Hub",
    docsDescription:
      "Install Doc Hub, open a Docs/ workspace, connect agents via dm / MCP, and use the tool map for session, fence, orbit, and planning.",
    benchmarkTitle: "Context Benchmark — Doc Hub",
    benchmarkDescription:
      "Public summary of Doc Hub context-retrieval evidence: critical-context recall, Phase B pilot outcomes, and post-fix efficiency probe.",
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
    lede: "We gave agents real engineering tasks and checked whether Doc Hub put the project’s hard rules in front of them — then whether they still had to dig less after we fixed noisy sessions. Internal technical evidence only. Not market traction. Not a claim that Doc Hub writes better code.",
    badgeCoverage: "Coverage",
    badgeCoverageEm: "n=20",
    badgeOutcomes: "Outcomes",
    badgeOutcomesEm: "PASS/PASS",
    badgeEfficiency: "Extra lookups",
    badgeEfficiencyEm: "−76%",
    metricRulesLabel: "More hard rules in the first packet",
    metricRulesNote: "Baseline 67.8% → Doc Hub 88.4% (20 tasks)",
    metricMissLabel: "Fewer missed must-know rules",
    metricMissNote: "Miss rate 32.2% → 11.6% on gold constraints",
    metricLookupsLabel: "Fewer extra lookups after the first packet",
    metricLookupsNote: "Pre-fix → post-fix Doc Hub (−75.8%), same 5 tasks",
    calloutStrong: "How to read this.",
    calloutBody:
      "Coverage asks whether a must-know rule showed up in the first context packet — not whether the agent wrote better code. On five paired tasks both setups finished PASS; we saw no quality advantage. After three session/retrieval fixes, Doc Hub needed fewer recovery lookups — Baseline was not re-run in that probe.",
    examplesTitle: "What a “hard rule” looks like",
    examplesLede:
      "These are the kinds of constraints we scored. Miss one and the agent often “fixes” the problem the wrong way.",
    ex1Title: "One local board, no cloud rewrite",
    ex1Body:
      "Task: several local processes share one planning board. Hard rules: single `.dochub/workspace.sqlite`, WAL + busy handling, no CRDT or hosted DB. Miss that and the agent invents cloud sync or a second database.",
    ex2Title: "Unity pin without breaking Doc Hub",
    ex2Body:
      "Task: Cursor windows for Unity need Doc Hub MCP pointed at the Unity project. Hard rules: prefer per-project pin; must coexist with the existing doc-hub window. Miss that and you break the main Doc Hub sessions.",
    coverageTitle: "Coverage — hard rules in the first packet",
    coverageBody:
      "20 historical engineering tasks. Baseline = AGENTS.md / CLAUDE.md + the repo. Doc Hub = a session packet first. We scored whether gold must-know rules appeared in that early context — not coding quality.",
    barBaseline: "Baseline",
    barDocHub: "Doc Hub",
    coverageFaint:
      "+20.6 percentage points more rules covered · ~64% relative miss cut",
    outcomesTitle: "Outcomes — did the work get better?",
    outcomesBody:
      "Five paired agent tasks under locked scoring. Same prompts; design artifacts only. Doc Hub starts with a session packet. Same finish line — Doc Hub cost more digging before the later fixes.",
    thResult: "Result",
    thValue: "Value",
    rowOutcomes: "Task finish",
    rowOutcomesValue: "PASS / PASS on all 5 pairs",
    rowQuality: "Quality deltas",
    rowQualityValue:
      "No critical / architecture / verification / rework advantage observed",
    rowOverhead: "Extra digging",
    rowOverheadValue: "Mean +11 extra file/doc lookups vs Baseline",
    outcomesFaint:
      "These tasks were often solvable with normal repo Read/Grep — so finish-line scores barely separated the two setups. Pilot closed; scores locked.",
    efficiencyTitle: "Less hunting after session fixes",
    efficiencyLede:
      "Separate check on the same five tasks after three product fixes. Measures extra lookups after the first packet — not a rewrite of the outcome scores above.",
    fix1Title: "1. Pull related docs together",
    fix1Body:
      "Keep a family of ADRs / docs in the first chain instead of making the agent rediscover them one by one.",
    fix2Title: "2. Index the canonical sources",
    fix2Body:
      "Allowlist package READMEs, MCP pin config, and schema digests so the session can cite the real source of truth.",
    fix3Title: "3. Say when the packet is enough",
    fix3Body:
      "A clear sufficient / partial / insufficient signal plus stop guidance — tools stay available; the agent gets a hint to stop thrashing.",
    meanTitle: "Mean extra lookups (Doc Hub)",
    barPre: "Before fixes",
    barPost: "After fixes",
    meanFaint:
      "−23.8 absolute · −75.8% relative · median 7 · all five still PASS · zero board/bridge/map recovery after the session",
    evalFixTitle: "Benchmark found debt → fix → recheck",
    evalFixPreLabel: "Before (CB-001)",
    evalFixPostLabel: "After (CB-001-R1)",
    evalFixFaint:
      "~46% fewer extra lookups after a bounded routing/session fix. Still PASS. Original CB-001 run left unchanged.",
    perCaseTitle: "Extra lookups per task (before → after)",
    perCaseAria: "Extra lookups per task",
    labelPre: "before",
    labelPost: "after",
    case001Title: "Shared local board",
    case002Title: "SQLite busy / WAL",
    case005Title: "ADR runtime truth",
    case007Title: "Unity MCP pin",
    case011Title: "Quarantine fence",
    residualTitle: "What remained after “enough to start”",
    residualLede:
      "Almost all leftover lookups were reading code to implement the design — not hunting for board/docs maps.",
    legendNecessary: "Needed for impl (34)",
    legendOptional: "Optional confirm (3)",
    legendRedundant: "Redundant (1)",
    legendBoard: "Board/bridge/map (0)",
    limitationsTitle: "Limitations",
    lim1: "Coverage scoring is a packet heuristic — it can over- or under-count.",
    lim2: "Outcome pilot n = 5; historical tasks; not blind; design artifacts only.",
    lim3: "Efficiency probe used a fresh local session when live MCP was stale; Baseline was not re-run.",
    lim4: "No external traction or willingness-to-pay evidence on this page.",
    footSnapshot:
      "Snapshot date 2026-08-05 · Full evidence lives in the Doc Hub ecosystem grant corpus. This page is a public visual summary only.",
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
