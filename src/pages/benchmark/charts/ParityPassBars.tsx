export function ParityPassBars({
  label,
  mdLabel,
  mcpLabel,
  mdPct,
  mcpPct,
  nLabel,
  note,
}: {
  label: string;
  mdLabel: string;
  mcpLabel: string;
  mdPct: number;
  mcpPct: number;
  nLabel: string;
  note: string;
}) {
  return (
    <article className="bench-viz-card">
      <div className="bench-viz-head">
        <strong>{label}</strong>
        <span className="bench-viz-n">{nLabel}</span>
      </div>
      <div className="bench-parity">
        <div className="bench-parity-col">
          <span>{mdLabel}</span>
          <div className="bench-parity-track">
            <div className="bench-parity-fill md" style={{ height: `${mdPct}%` }} />
          </div>
          <strong>{mdPct.toFixed(0)}%</strong>
        </div>
        <div className="bench-parity-col">
          <span>{mcpLabel}</span>
          <div className="bench-parity-track">
            <div
              className="bench-parity-fill mcp"
              style={{ height: `${mcpPct}%` }}
            />
          </div>
          <strong>{mcpPct.toFixed(0)}%</strong>
        </div>
      </div>
      <p className="bench-viz-note">{note}</p>
    </article>
  );
}

/** Grouped PASS % by visitor category — MD vs MCP pair per category. */
