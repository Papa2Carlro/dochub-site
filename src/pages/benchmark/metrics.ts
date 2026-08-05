import { CURRENT, PHASE_A_RECALL } from "./data";

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
