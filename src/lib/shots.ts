export type ShotId =
  | "taskBoard"
  | "dashboard"
  | "dashboardAudit"
  | "milestones"
  | "orbitMap"
  | "livingGlossary"
  | "mcpHistory"
  | "trophyRoom";

export type Shot = {
  id: ShotId;
  src: string;
};

/** Product UI shots for the landing gallery + lightbox. Captions via i18n. */
export const SHOTS: Shot[] = [
  { id: "taskBoard", src: "./screens/portfolio-task-board.png" },
  { id: "dashboard", src: "./screens/portfolio-dashboard-overview.png" },
  { id: "dashboardAudit", src: "./screens/portfolio-dashboard-audit.png" },
  { id: "milestones", src: "./screens/portfolio-milestones.png" },
  { id: "orbitMap", src: "./screens/portfolio-orbit-map.png" },
  { id: "livingGlossary", src: "./screens/portfolio-living-glossary.png" },
  { id: "mcpHistory", src: "./screens/portfolio-mcp-history.png" },
  { id: "trophyRoom", src: "./screens/portfolio-trophy-room.png" },
];

export const SHOT_CAPTION_KEY = {
  taskBoard: "taskBoardCaption",
  dashboard: "dashboardCaption",
  dashboardAudit: "dashboardAuditCaption",
  milestones: "milestonesCaption",
  orbitMap: "orbitMapCaption",
  livingGlossary: "livingGlossaryCaption",
  mcpHistory: "mcpHistoryCaption",
  trophyRoom: "trophyRoomCaption",
} as const;

export const SHOT_ALT_KEY = {
  taskBoard: "taskBoardAlt",
  dashboard: "dashboardAlt",
  dashboardAudit: "dashboardAuditAlt",
  milestones: "milestonesAlt",
  orbitMap: "orbitMapAlt",
  livingGlossary: "livingGlossaryAlt",
  mcpHistory: "mcpHistoryAlt",
  trophyRoom: "trophyRoomAlt",
} as const;
