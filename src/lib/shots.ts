export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export const SHOTS: Shot[] = [
  {
    src: "./screens/board.png",
    alt: "Doc Hub task board with Open, In Progress, Code Review, QA, and Deferred columns",
    caption: "Task board",
  },
  {
    src: "./screens/dashboard.png",
    alt: "Doc Hub dashboard audit view with task counts, doc index, and codebase health",
    caption: "Dashboard",
  },
  {
    src: "./screens/trophy.png",
    alt: "Doc Hub Trophy Room with levels, XP, streaks, and weekly quests",
    caption: "Trophy Room",
  },
];
