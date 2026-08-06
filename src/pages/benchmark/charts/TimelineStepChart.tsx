export function TimelineStepChart({
  title,
  seriesMd,
  seriesMcp,
  points,
}: {
  title: string;
  seriesMd: string;
  seriesMcp: string;
  points: {
    label: string;
    mdY: number | null;
    mcpY: number | null;
    unit: string;
  }[];
}) {
  const w = 440;
  const h = 210;
  const pad = { l: 44, r: 20, t: 28, b: 42 };
  const plotW = w - pad.l - pad.r;
  const plotH = h - pad.t - pad.b;
  const ys = points.flatMap((p) => [p.mdY, p.mcpY]).filter((v): v is number => v != null);
  const maxY = Math.max(...ys, 1);
  const xAt = (i: number) =>
    pad.l + (points.length === 1 ? plotW / 2 : (i / (points.length - 1)) * plotW);
  const yAt = (y: number) => pad.t + (1 - y / maxY) * plotH;

  const pathFor = (key: "mdY" | "mcpY") => {
    const pts = points
      .map((p, i) => ({ i, y: p[key] }))
      .filter((p): p is { i: number; y: number } => p.y != null);
    if (pts.length === 0) return "";
    return pts
      .map((p, idx) => `${idx === 0 ? "M" : "L"} ${xAt(p.i)} ${yAt(p.y)}`)
      .join(" ");
  };

  return (
    <article className="bench-viz-card bench-viz-wide">
      <div className="bench-viz-head">
        <strong>{title}</strong>
      </div>
      <svg
        className="bench-cost-svg"
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        overflow="visible"
      >
        <line
          x1={pad.l}
          y1={h - pad.b}
          x2={w - pad.r}
          y2={h - pad.b}
          className="bench-axis"
        />
        <path d={pathFor("mdY")} className="bench-step-line md" fill="none" />
        <path d={pathFor("mcpY")} className="bench-step-line mcp" fill="none" />
        {points.map((p, i) => (
          <g key={p.label}>
            {p.mdY != null && (
              <circle cx={xAt(i)} cy={yAt(p.mdY)} r={5} className="bench-point md" />
            )}
            {p.mcpY != null && (
              <circle
                cx={xAt(i)}
                cy={yAt(p.mcpY)}
                r={5}
                className="bench-point mcp"
              />
            )}
            <text
              x={xAt(i)}
              y={h - pad.b + 14}
              className="bench-axis-label"
              textAnchor="middle"
            >
              {p.label}
            </text>
            {p.mcpY != null && (
              <text
                x={xAt(i)}
                y={yAt(p.mcpY) - 10}
                className="bench-point-label"
                textAnchor="middle"
              >
                {p.mcpY}
                {p.unit}
              </text>
            )}
          </g>
        ))}
      </svg>
      <div className="bench-stack-legend">
        <span>
          <i className="md" />
          {seriesMd}
        </span>
        <span>
          <i className="mcp" />
          {seriesMcp}
        </span>
      </div>
    </article>
  );
}
