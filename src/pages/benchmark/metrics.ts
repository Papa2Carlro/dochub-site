import { CATEGORIES, CURRENT, CURRENT_CASES, PHASE_A_RECALL, WALKTHROUGHS } from "./data";
import type { CategoryId } from "./types";

export function currentRates() {
  const mdPassPct = (CURRENT.mdPass / CURRENT.n) * 100;
  const mcpPassPct = (CURRENT.mcpPass / CURRENT.n) * 100;
  const advMdPct = (CURRENT.advantageMdPass / CURRENT.advantageN) * 100;
  const advMcpPct = (CURRENT.advantageMcpPass / CURRENT.advantageN) * 100;
  return {
    mdPassPct,
    mcpPassPct,
    advMdPct,
    advMcpPct,
    advDeltaPp: advMcpPct - advMdPct,
    mdMeanExtra: CURRENT.mdMeanExtra,
    mcpMeanExtra: CURRENT.mcpMeanExtra,
    deltaExtra: CURRENT.deltaExtra,
    mdRecall: PHASE_A_RECALL.mdRecall,
    mcpRecall: PHASE_A_RECALL.mcpRecall,
    recallDelta: PHASE_A_RECALL.deltaPp,
  };
}

export type CategoryRollup = {
  id: CategoryId;
  n: number;
  mdPass: number;
  mcpPass: number;
  mdPassPct: number;
  mcpPassPct: number;
  mdMeanExtra: number;
  mcpMeanExtra: number;
  mcpWins: number;
};

export function categoryRollups(): CategoryRollup[] {
  return CATEGORIES.map((cat) => {
    const cases = CURRENT_CASES.filter((c) => c.categoryId === cat.id);
    const n = cases.length;
    const mdPass = cases.filter((c) => c.plainOutcome === "PASS").length;
    const mcpPass = cases.filter((c) => c.dmOutcome === "PASS").length;
    const mcpWins = cases.filter(
      (c) => c.dmOutcome === "PASS" && c.plainOutcome !== "PASS",
    ).length;
    const mdMeanExtra =
      n === 0 ? 0 : cases.reduce((s, c) => s + c.mdExtra, 0) / n;
    const mcpMeanExtra =
      n === 0 ? 0 : cases.reduce((s, c) => s + c.mcpExtra, 0) / n;
    return {
      id: cat.id,
      n,
      mdPass,
      mcpPass,
      mdPassPct: n === 0 ? 0 : (mdPass / n) * 100,
      mcpPassPct: n === 0 ? 0 : (mcpPass / n) * 100,
      mdMeanExtra,
      mcpMeanExtra,
      mcpWins,
    };
  });
}

export function casesByCategory(categoryId: CategoryId) {
  return CURRENT_CASES.filter((c) => c.categoryId === categoryId);
}

export function findWalk(caseId: string) {
  return WALKTHROUGHS.find((w) => w.id === caseId);
}
