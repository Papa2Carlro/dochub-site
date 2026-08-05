export function outcomeTone(outcome: string): string {
  if (outcome === "PASS") return "pass";
  if (outcome === "PARTIAL") return "partial";
  return "fail";
}

export function StackedRecallBar({
  label,
  basePct,
  withPct,
  baseCaption,
  deltaCaption,
  nLabel,
}: {
  label: string;
  basePct: number;
  withPct: number;
  baseCaption: string;
  deltaCaption: string;
  nLabel: string;
}) {
  const delta = Math.max(withPct - basePct, 0);
  return (
    <article className="bench-viz-card">
      <div className="bench-viz-head">
        <strong>{label}</strong>
        <span className="bench-viz-n">{nLabel}</span>
      </div>
      <div className="bench-stack-bar" aria-hidden="true">
        <div className="bench-stack-seg md" style={{ width: `${basePct}%` }} />
        <div className="bench-stack-seg mcp" style={{ width: `${delta}%` }} />
      </div>
      <div className="bench-stack-legend">
        <span>
          <i className="md" />
          {baseCaption}: <strong>{basePct}%</strong>
        </span>
        <span>
          <i className="mcp" />
          {deltaCaption}: <strong>+{delta.toFixed(1)} pp → {withPct}%</strong>
        </span>
      </div>
    </article>
  );
}

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

export function PerTaskDualPanel({
  title,
  rateLabel,
  nLabel,
  mdLabel,
  mcpLabel,
  cases,
}: {
  title: string;
  rateLabel: string;
  nLabel: string;
  mdLabel: string;
  mcpLabel: string;
  cases: {
    id: string;
    mdPass: boolean;
    mcpPass: boolean;
    mdExtra: number;
    mcpExtra: number;
  }[];
}) {
  const maxExtra = Math.max(...cases.flatMap((c) => [c.mdExtra, c.mcpExtra]), 1);
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
        {cases.map((c) => (
          <div className="bench-dual-task" key={c.id}>
            <span className="bench-dual-id">{c.id}</span>
            <div className="bench-dual-pills">
              <span className={`bench-pill ${c.mdPass ? "pass" : "fail"}`}>
                {mdLabel} {c.mdPass ? "PASS" : "FAIL"}
              </span>
              <span className={`bench-pill ${c.mcpPass ? "pass" : "fail"}`}>
                {mcpLabel} {c.mcpPass ? "PASS" : "FAIL"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="bench-dual-bottom">
        <span className="bench-dual-caption">Extra lookups</span>
        {cases.map((c) => (
          <div className="bench-dual-bars" key={`${c.id}-x`}>
            <span className="bench-dual-id">{c.id}</span>
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

export function StarvationDualPanel({
  title,
  cases,
  plainLabel,
  mcpLabel,
  nLabel,
}: {
  title: string;
  plainLabel: string;
  mcpLabel: string;
  nLabel: string;
  cases: { id: string; plainOutcome: string; dmOutcome: string }[];
}) {
  const plainPass = cases.filter((c) => c.plainOutcome === "PASS").length;
  const mcpPass = cases.filter((c) => c.dmOutcome === "PASS").length;
  return (
    <article className="bench-viz-card bench-viz-wide">
      <div className="bench-viz-head">
        <strong>{title}</strong>
        <span className="bench-viz-n">
          {nLabel}: {cases.length}
        </span>
      </div>
      <div className="bench-parity bench-parity-h">
        <div className="bench-parity-col">
          <span>{plainLabel}</span>
          <strong className="warn-num">
            {((plainPass / cases.length) * 100).toFixed(0)}%
          </strong>
          <em>
            {plainPass}/{cases.length} PASS
          </em>
        </div>
        <div className="bench-parity-col">
          <span>{mcpLabel}</span>
          <strong className="good">
            {((mcpPass / cases.length) * 100).toFixed(0)}%
          </strong>
          <em>
            {mcpPass}/{cases.length} PASS
          </em>
        </div>
      </div>
      <div className="bench-dual-top">
        {cases.map((c) => (
          <div className="bench-dual-task" key={c.id}>
            <span className="bench-dual-id">{c.id}</span>
            <div className="bench-dual-pills">
              <span className={`bench-pill ${outcomeTone(c.plainOutcome)}`}>
                {plainLabel}: {c.plainOutcome}
              </span>
              <span className={`bench-pill ${outcomeTone(c.dmOutcome)}`}>
                {mcpLabel}: {c.dmOutcome}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function BarRow({
  label,
  pct: widthPct,
  tone,
  value,
}: {
  label: string;
  pct: number;
  tone: "baseline" | "dochub" | "pre" | "post";
  value?: string;
}) {
  return (
    <div className="bench-bar-row">
      <span className="bench-bar-label">{label}</span>
      <div className="bench-bar-track">
        <div
          className={`bench-bar-fill ${tone}`}
          style={{ width: `${widthPct}%` }}
        />
      </div>
      <span className="bench-bar-num">{value ?? `${widthPct}%`}</span>
    </div>
  );
}

export function MiniBar({
  label,
  width,
  value,
  tone,
}: {
  label: string;
  width: number;
  value: number;
  tone: "pre" | "post";
}) {
  return (
    <div className="bench-mini">
      <span>{label}</span>
      <div className="bench-mini-track">
        <div
          className={`bench-mini-fill ${tone}`}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="bench-mini-n">{value}</span>
    </div>
  );
}
