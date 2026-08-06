/** Grouped PASS % by visitor category — MD vs MCP pair per category. */
export function CategoryPassChart({
  title,
  mdLabel,
  mcpLabel,
  note,
  rows,
}: {
  title: string;
  mdLabel: string;
  mcpLabel: string;
  note: string;
  rows: { id: string; label: string; mdPct: number; mcpPct: number; n: number }[];
}) {
  return (
    <article className="bench-viz-card bench-viz-wide">
      <div className="bench-viz-head">
        <strong>{title}</strong>
        <span className="bench-viz-n">n={rows.reduce((s, r) => s + r.n, 0)}</span>
      </div>
      <div className="bench-cat-chart" role="img" aria-label={title}>
        {rows.map((r) => (
          <div className="bench-cat-row" key={r.id}>
            <span className="bench-cat-label" title={r.label}>
              {r.label}
              <em>n={r.n}</em>
            </span>
            <div className="bench-cat-bars">
              <div className="bench-cat-pair">
                <span className="bench-cat-arm">{mdLabel}</span>
                <div className="bench-cat-track">
                  <div
                    className="bench-cat-fill md"
                    style={{ width: `${r.mdPct}%` }}
                  />
                </div>
                <strong>{r.mdPct.toFixed(0)}%</strong>
              </div>
              <div className="bench-cat-pair">
                <span className="bench-cat-arm">{mcpLabel}</span>
                <div className="bench-cat-track">
                  <div
                    className="bench-cat-fill mcp"
                    style={{ width: `${r.mcpPct}%` }}
                  />
                </div>
                <strong>{r.mcpPct.toFixed(0)}%</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="bench-viz-note">{note}</p>
    </article>
  );
}
