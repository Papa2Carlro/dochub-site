export function PerTaskDualPanel({
  title,
  rateLabel,
  nLabel,
  mdLabel,
  mcpLabel,
  winLabel,
  tieLabel,
  cases,
}: {
  title: string;
  rateLabel: string;
  nLabel: string;
  mdLabel: string;
  mcpLabel: string;
  winLabel?: string;
  tieLabel?: string;
  cases: {
    id: string;
    title?: string;
    mdPass: boolean;
    mcpPass: boolean;
    mdExtra: number;
    mcpExtra: number;
    mdOutcome?: string;
    mcpOutcome?: string;
    klass?: string;
  }[];
}) {
  const maxExtra = Math.max(...cases.flatMap((c) => [c.mdExtra, c.mcpExtra]), 1);
  const pillClass = (outcome: string) => {
    if (outcome === "PASS") return "pass";
    if (outcome === "PARTIAL") return "partial";
    return "fail";
  };
  const labelFor = (c: { id: string; title?: string }) => c.title ?? c.id;
  const resultTag = (c: {
    mdOutcome?: string;
    mcpOutcome?: string;
    mdPass: boolean;
    mcpPass: boolean;
  }) => {
    const mdOut = c.mdOutcome ?? (c.mdPass ? "PASS" : "FAIL");
    const mcpOut = c.mcpOutcome ?? (c.mcpPass ? "PASS" : "FAIL");
    if (mcpOut === "PASS" && mdOut !== "PASS") return "win";
    if (mdOut === mcpOut) return "tie";
    return null;
  };
  return (
    <article className="bench-viz-card bench-viz-wide">
      <div className="bench-viz-head">
        <strong>{title}</strong>
        <span className="bench-viz-n">
          {nLabel}: {cases.length}
        </span>
      </div>
      <div className="bench-dual-top">
        <span className="bench-dual-caption">{rateLabel}</span>
        {cases.map((c) => {
          const mdOut = c.mdOutcome ?? (c.mdPass ? "PASS" : "FAIL");
          const mcpOut = c.mcpOutcome ?? (c.mcpPass ? "PASS" : "FAIL");
          const tag = resultTag(c);
          return (
          <div className="bench-dual-task" key={c.id}>
            <span className="bench-dual-id">
              <strong className="bench-dual-title">{labelFor(c)}</strong>
              <span className="bench-dual-ref">
                {c.id}
                {c.klass ? ` · ${c.klass}` : ""}
              </span>
            </span>
            <div className="bench-dual-pills">
              <span className={`bench-pill ${pillClass(mdOut)}`}>
                {mdLabel} {mdOut}
              </span>
              <span className={`bench-pill ${pillClass(mcpOut)}`}>
                {mcpLabel} {mcpOut}
              </span>
              {tag === "win" && winLabel ? (
                <span className="bench-pill pass">{winLabel}</span>
              ) : null}
              {tag === "tie" && tieLabel ? (
                <span className="bench-pill partial">{tieLabel}</span>
              ) : null}
            </div>
          </div>
          );
        })}
      </div>
      <div className="bench-dual-bottom">
        <span className="bench-dual-caption">Extra lookups</span>
        {cases.map((c) => (
          <div className="bench-dual-bars" key={`${c.id}-x`}>
            <span className="bench-dual-id">
              <strong className="bench-dual-title">{labelFor(c)}</strong>
              <span className="bench-dual-ref">{c.id}</span>
            </span>
            <div className="bench-mini-pair">
              <div
                className="bench-mini-fill md"
                style={{ width: `${(c.mdExtra / maxExtra) * 100}%` }}
                title={`${mdLabel}: ${c.mdExtra}`}
              />
              <em>{c.mdExtra}</em>
            </div>
            <div className="bench-mini-pair">
              <div
                className="bench-mini-fill mcp"
                style={{ width: `${(c.mcpExtra / maxExtra) * 100}%` }}
                title={`${mcpLabel}: ${c.mcpExtra}`}
              />
              <em>{c.mcpExtra}</em>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
