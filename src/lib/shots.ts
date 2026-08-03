export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

/** Product UI shots for the landing gallery + lightbox. */
export const SHOTS: Shot[] = [
  {
    src: "./screens/portfolio-task-board.png",
    alt: "Doc Hub task board with Open, In Progress, Code Review, QA, and Deferred columns",
    caption: "Task board",
  },
  {
    src: "./screens/portfolio-dashboard-overview.png",
    alt: "Doc Hub dashboard overview with workspace status and planning signals",
    caption: "Dashboard",
  },
  {
    src: "./screens/portfolio-dashboard-audit.png",
    alt: "Doc Hub dashboard audit view with task counts, doc index, and codebase health",
    caption: "Dashboard audit",
  },
  {
    src: "./screens/portfolio-milestones.png",
    alt: "Doc Hub milestones view for roadmap phases and delivery checkpoints",
    caption: "Milestones",
  },
  {
    src: "./screens/portfolio-orbit-map.png",
    alt: "Doc Hub Orbit map showing domain relationships across the workspace",
    caption: "Orbit map",
  },
  {
    src: "./screens/portfolio-living-glossary.png",
    alt: "Doc Hub Living Glossary with shared product terms and definitions",
    caption: "Living Glossary",
  },
  {
    src: "./screens/portfolio-mcp-history.png",
    alt: "Doc Hub MCP history of agent tool calls and doc-memory activity",
    caption: "MCP history",
  },
  {
    src: "./screens/portfolio-trophy-room.png",
    alt: "Doc Hub Trophy Room with levels, XP, streaks, and weekly quests",
    caption: "Trophy Room",
  },
];
