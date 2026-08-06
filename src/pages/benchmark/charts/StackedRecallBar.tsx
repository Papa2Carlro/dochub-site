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
