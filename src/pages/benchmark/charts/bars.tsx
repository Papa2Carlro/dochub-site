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
  tone: "pre" | "post" | "md" | "mcp";
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
