import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { useI18n } from "../i18n";

const CASES = [
  { id: "CB-001", pre: 28, post: 7 },
  { id: "CB-002", pre: 26, post: 7 },
  { id: "CB-005", pre: 45, post: 8 },
  { id: "CB-007", pre: 24, post: 7 },
  { id: "CB-011", pre: 34, post: 9 },
] as const;

const CASE_SCALE = 45;

export function BenchmarkPage() {
  const { t } = useI18n();

  useEffect(() => {
    const prev = document.title;
    document.title = t("benchmark", "documentTitle");
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [t]);

  return (
    <div className="page bench-page">
      <SiteHeader variant="page" />

      <main className="band bench">
        <p className="bench-crumb">
          <Link to="/">{t("benchmark", "crumbHome")}</Link>
          <span>{t("benchmark", "crumbCurrent")}</span>
        </p>
        <h1 className="bench-title">{t("benchmark", "title")}</h1>
        <p className="bench-lede">{t("benchmark", "lede")}</p>

        <div className="bench-badges">
          <span className="bench-badge">
            {t("benchmark", "badgePhaseA")}
            <em>{t("benchmark", "badgePhaseAEm")}</em>
          </span>
          <span className="bench-badge">
            {t("benchmark", "badgePhaseB")}
            <em>{t("benchmark", "badgePhaseBEm")}</em>
          </span>
          <span className="bench-badge">
            {t("benchmark", "badgePostFix")}
            <em>{t("benchmark", "badgePostFixEm")}</em>
          </span>
        </div>

        <div className="bench-hero-metrics">
          <article className="bench-metric">
            <div className="bench-metric-label">
              {t("benchmark", "recallLabel")}
            </div>
            <div className="bench-metric-value accent">+20.6 pp</div>
            <p className="bench-metric-note">{t("benchmark", "recallNote")}</p>
          </article>
          <article className="bench-metric">
            <div className="bench-metric-label">
              {t("benchmark", "missLabel")}
            </div>
            <div className="bench-metric-value good">~64%</div>
            <p className="bench-metric-note">{t("benchmark", "missNote")}</p>
          </article>
          <article className="bench-metric">
            <div className="bench-metric-label">
              {t("benchmark", "extraLabel")}
            </div>
            <div className="bench-metric-value good">31.4 → 7.6</div>
            <p className="bench-metric-note">{t("benchmark", "extraNote")}</p>
          </article>
        </div>

        <div className="bench-callout">
          <strong>{t("benchmark", "calloutStrong")}</strong>{" "}
          {t("benchmark", "calloutBody")}
        </div>

        <h2 className="bench-h2">{t("benchmark", "phaseATitle")}</h2>
        <p>{t("benchmark", "phaseABody")}</p>
        <div className="bench-panel">
          <BarRow
            label={t("benchmark", "barBaseline")}
            pct={67.8}
            tone="baseline"
          />
          <BarRow
            label={t("benchmark", "barDocHub")}
            pct={88.4}
            tone="dochub"
          />
          <p className="bench-faint">{t("benchmark", "phaseAFaint")}</p>
        </div>

        <h2 className="bench-h2">{t("benchmark", "phaseBTitle")}</h2>
        <p>{t("benchmark", "phaseBBody")}</p>
        <div className="bench-panel">
          <table className="bench-table">
            <thead>
              <tr>
                <th>{t("benchmark", "thResult")}</th>
                <th>{t("benchmark", "thValue")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="strong">{t("benchmark", "rowOutcomes")}</td>
                <td>{t("benchmark", "rowOutcomesValue")}</td>
              </tr>
              <tr>
                <td className="strong">{t("benchmark", "rowQuality")}</td>
                <td>{t("benchmark", "rowQualityValue")}</td>
              </tr>
              <tr>
                <td className="strong">{t("benchmark", "rowOverhead")}</td>
                <td>{t("benchmark", "rowOverheadValue")}</td>
              </tr>
            </tbody>
          </table>
          <p className="bench-faint">{t("benchmark", "phaseBFaint")}</p>
        </div>

        <h3 className="bench-h3">{t("benchmark", "evalFixTitle")}</h3>
        <div className="bench-panel">
          <BarRow label="CB-001" pct={100} tone="pre" value="28" />
          <BarRow label="CB-001-R1" pct={53.6} tone="post" value="15" />
          <p className="bench-faint">{t("benchmark", "evalFixFaint")}</p>
        </div>

        <h2 className="bench-h2">{t("benchmark", "postFixTitle")}</h2>
        <p>{t("benchmark", "postFixLede")}</p>

        <div className="bench-fix-grid">
          <article className="bench-fix">
            <strong>{t("benchmark", "fix1Title")}</strong>
            <p>{t("benchmark", "fix1Body")}</p>
          </article>
          <article className="bench-fix">
            <strong>{t("benchmark", "fix2Title")}</strong>
            <p>{t("benchmark", "fix2Body")}</p>
          </article>
          <article className="bench-fix">
            <strong>{t("benchmark", "fix3Title")}</strong>
            <p>{t("benchmark", "fix3Body")}</p>
          </article>
        </div>

        <h3 className="bench-h3">{t("benchmark", "meanTitle")}</h3>
        <div className="bench-panel">
          <BarRow
            label={t("benchmark", "barPre")}
            pct={100}
            tone="pre"
            value="31.4"
          />
          <BarRow
            label={t("benchmark", "barPost")}
            pct={24.2}
            tone="post"
            value="7.6"
          />
          <p className="bench-faint">{t("benchmark", "meanFaint")}</p>
        </div>

        <h3 className="bench-h3">{t("benchmark", "perCaseTitle")}</h3>
        <div
          className="bench-panel bench-cases"
          aria-label={t("benchmark", "perCaseAria")}
        >
          {CASES.map((c) => (
            <div className="bench-case" key={c.id}>
              <span className="bench-case-id">{c.id}</span>
              <div className="bench-case-bars">
                <MiniBar
                  label={t("benchmark", "labelPre")}
                  width={(c.pre / CASE_SCALE) * 100}
                  value={c.pre}
                  tone="pre"
                />
                <MiniBar
                  label={t("benchmark", "labelPost")}
                  width={(c.post / CASE_SCALE) * 100}
                  value={c.post}
                  tone="post"
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="bench-h3">{t("benchmark", "residualTitle")}</h3>
        <p>{t("benchmark", "residualLede")}</p>
        <div className="bench-panel">
          <div
            className="bench-stack"
            title="Post-sufficient fetch mix across 5 cases"
          >
            <span
              style={{ width: "89.5%", background: "var(--accent)" }}
              title="Necessary implementation"
            />
            <span
              style={{ width: "7.9%", background: "var(--warn)" }}
              title="Optional confirmation"
            />
            <span
              style={{ width: "2.6%", background: "#6b7280" }}
              title="Redundant navigation"
            />
          </div>
          <div className="bench-legend">
            <span>
              <i style={{ background: "var(--accent)" }} />
              {t("benchmark", "legendNecessary")}
            </span>
            <span>
              <i style={{ background: "var(--warn)" }} />
              {t("benchmark", "legendOptional")}
            </span>
            <span>
              <i style={{ background: "#6b7280" }} />
              {t("benchmark", "legendRedundant")}
            </span>
            <span>
              <i style={{ background: "var(--good)" }} />
              {t("benchmark", "legendBoard")}
            </span>
          </div>
        </div>

        <h2 className="bench-h2">{t("benchmark", "limitationsTitle")}</h2>
        <ul className="bench-list">
          <li>{t("benchmark", "lim1")}</li>
          <li>{t("benchmark", "lim2")}</li>
          <li>{t("benchmark", "lim3")}</li>
          <li>{t("benchmark", "lim4")}</li>
        </ul>

        <div className="bench-foot">
          <p className="bench-faint">{t("benchmark", "footSnapshot")}</p>
          <p className="bench-foot-links">
            <Link to="/">{t("benchmark", "footBack")}</Link>
            <a href="/press/">{t("benchmark", "footPress")}</a>
            <Link to="/#download">{t("benchmark", "footDownload")}</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

function BarRow({
  label,
  pct,
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
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="bench-bar-num">{value ?? `${pct}%`}</span>
    </div>
  );
}

function MiniBar({
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
