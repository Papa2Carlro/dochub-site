import { CURRENT, PHASE_A_RECALL } from "./data";

export function currentRates() {
  const mdPassPct = (CURRENT.mdPass / CURRENT.n) * 100;
  const mcpPassPct = (CURRENT.mcpPass / CURRENT.n) * 100;
  return {
    mdPassPct,
    mcpPassPct,
    mdCritHit:
      ((CURRENT.critApplicable - CURRENT.mdCritMiss) / CURRENT.critApplicable) *
      100,
    mcpCritHit:
      ((CURRENT.critApplicable - CURRENT.mcpCritMiss) /
        CURRENT.critApplicable) *
      100,
    mdMeanExtra: CURRENT.mdMeanExtra,
    mcpMeanExtra: CURRENT.mcpMeanExtra,
    deltaExtra: CURRENT.deltaExtra,
    mdRecall: PHASE_A_RECALL.mdRecall,
    mcpRecall: PHASE_A_RECALL.mcpRecall,
    recallDelta: PHASE_A_RECALL.deltaPp,
  };
}
