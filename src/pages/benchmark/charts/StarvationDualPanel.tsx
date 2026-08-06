import { outcomeTone } from "./outcomeTone";

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
