export function CostQualityChart({
  title,
  xLabel,
  yLabel,
  mdLabel,
  mcpLabel,
  mdX,
  mdY,
  mcpX,
  mcpY,
  maxX,
  note,
}: {
  title: string;
  xLabel: string;
  yLabel: string;
  mdLabel: string;
  mcpLabel: string;
  mdX: number;
  mdY: number;
  mcpX: number;
  mcpY: number;
  maxX: number;
  note: string;
}) {
  const w = 360;
  const h = 220;
  const pad = { l: 56, r: 20, t: 36, b: 48 };
  const plotW = w - pad.l - pad.r;
  const plotH = h - pad.t - pad.b;
  const xScale = (x: number) => pad.l + (x / maxX) * plotW;
  const yScale = (y: number) => pad.t + (1 - y / 100) * plotH;
  return (
    <article className="bench-viz-card bench-viz-wide">
      <div className="bench-viz-head">
        <strong>{title}</strong>
      </div>
      <svg
        className="bench-cost-svg"
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        aria-label={title}
        overflow="visible"
      >
        <line
          x1={pad.l}
          y1={pad.t}
          x2={pad.l}
          y2={h - pad.b}
          className="bench-axis"
        />
        <line
          x1={pad.l}
          y1={h - pad.b}
          x2={w - pad.r}
          y2={h - pad.b}
          className="bench-axis"
        />
        <text
          x={pad.l}
          y={pad.t - 12}
          className="bench-axis-label"
          textAnchor="start"
        >
          {yLabel}
        </text>
        <text
          x={(pad.l + w - pad.r) / 2}
          y={h - 12}
          className="bench-axis-label"
          textAnchor="middle"
        >
          {xLabel}
        </text>
        <circle
          cx={xScale(mdX)}
          cy={yScale(mdY)}
          r={7}
          className="bench-point md"
        />
        <circle
          cx={xScale(mcpX)}
          cy={yScale(mcpY)}
          r={7}
          className="bench-point mcp"
        />
        <text
          x={xScale(mdX)}
          y={yScale(mdY) - 12}
          className="bench-point-label"
          textAnchor="middle"
        >
          {mdLabel}
        </text>
        <text
          x={xScale(mcpX)}
          y={yScale(mcpY) - 12}
          className="bench-point-label"
          textAnchor="middle"
        >
          {mcpLabel}
        </text>
      </svg>
      <p className="bench-viz-note">{note}</p>
    </article>
  );
}
