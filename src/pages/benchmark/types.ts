import type { Messages } from "../../i18n/messages/en";

export type BenchKey = keyof Messages["benchmark"] & string;
export type Tab = "now" | "history";

export type CategoryId =
  | "handoff"
  | "continuity"
  | "secrets"
  | "two_windows"
  | "stale_docs"
  | "checklist"
  | "scattered"
  | "ties";

export type CurrentCase = {
  id: string;
  titleKey: BenchKey;
  plainOutcome: string;
  dmOutcome: string;
  plainCritMiss: number;
  plainCritN: number;
  dmCritMiss: number;
  dmCritN: number;
  plainVerifMiss: number;
  plainVerifN: number;
  dmVerifMiss: number;
  dmVerifN: number;
};

export type Walkthrough = {
  id: string;
  titleKey: BenchKey;
  promptKey: BenchKey;
  plainKey: BenchKey;
  dmKey: BenchKey;
  takeawayKey: BenchKey;
};

export type BenchmarkCategory = {
  id: CategoryId;
  titleKey: BenchKey;
  shortKey: BenchKey;
};
