import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { useI18n } from "../i18n";
import type { Messages } from "../i18n/messages/en";

type BenchKey = keyof Messages["benchmark"] & string;

const PHASE_C_CASES: {
  id: string;
  titleKey: BenchKey;
  plainKey: BenchKey;
  dmKey: BenchKey;
}[] = [
  {
    id: "CB-001",
    titleKey: "case001Title",
    plainKey: "case001Plain",
    dmKey: "case001Dm",
  },
  {
    id: "CB-002",
    titleKey: "case002Title",
    plainKey: "case002Plain",
    dmKey: "case002Dm",
  },
  {
    id: "CB-005",
    titleKey: "case005Title",
    plainKey: "case005Plain",
    dmKey: "case005Dm",
  },
  {
    id: "CB-007",
    titleKey: "case007Title",
    plainKey: "case007Plain",
    dmKey: "case007Dm",
  },
  {
    id: "CB-011",
    titleKey: "case011Title",
    plainKey: "case011Plain",
    dmKey: "case011Dm",
  },
];

const WALKTHROUGHS: {
  id: string;
  titleKey: BenchKey;
  promptKey: BenchKey;
  plainKey: BenchKey;
  dmKey: BenchKey;
  takeawayKey: BenchKey;
}[] = [
  {
    id: "CB-001",
    titleKey: "walk1Title",
    promptKey: "walk1Prompt",
    plainKey: "walk1Plain",
    dmKey: "walk1Dm",
    takeawayKey: "walk1Takeaway",
  },
  {
    id: "CB-007",
    titleKey: "walk2Title",
    promptKey: "walk2Prompt",
    plainKey: "walk2Plain",
    dmKey: "walk2Dm",
    takeawayKey: "walk2Takeaway",
  },
];

const EFFICIENCY_CASES: {
  id: string;
  pre: number;
  post: number;
  titleKey: BenchKey;
}[] = [
  { id: "CB-001", pre: 28, post: 7, titleKey: "case001Title" },
  { id: "CB-002", pre: 26, post: 7, titleKey: "case002Title" },
  { id: "CB-005", pre: 45, post: 8, titleKey: "case005Title" },
  { id: "CB-007", pre: 24, post: 7, titleKey: "case007Title" },
  { id: "CB-011", pre: 34, post: 9, titleKey: "case011Title" },
];

const CASE_SCALE = 45;

export function BenchmarkPage() {
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {t("benchmark", "badgePrompts")}
            <em>{t("benchmark", "badgePromptsEm")}</em>
          </span>
          <span className="bench-badge">
            {t("benchmark", "badgePlain")}
            <em>{t("benchmark", "badgePlainEm")}</em>
          </span>
          <span className="bench-badge">
            {t("benchmark", "badgeDm")}
            <em>{t("benchmark", "badgeDmEm")}</em>
          </span>
        </div>

        <div className="bench-hero-metrics">
          <article className="bench-metric">
            <div className="bench-metric-label">
              {t("benchmark", "metricPlainLabel")}
            </div>
            <div className="bench-metric-value">{t("benchmark", "metricPlainValue")}</div>
            <p className="bench-metric-note">
              {t("benchmark", "metricPlainNote")}
            </p>
          </article>
          <article className="bench-metric">
            <div className="bench-metric-label">
              {t("benchmark", "metricDmLabel")}
            </div>
            <div className="bench-metric-value good">
              {t("benchmark", "metricDmValue")}
            </div>
            <p className="bench-metric-note">{t("benchmark", "metricDmNote")}</p>
          </article>
          <article className="bench-metric">
            <div className="bench-metric-label">
              {t("benchmark", "metricContrastLabel")}
            </div>
            <div className="bench-metric-value accent">
              {t("benchmark", "metricContrastValue")}
            </div>
            <p className="bench-metric-note">
              {t("benchmark", "metricContrastNote")}
            </p>
          </article>
        </div>

        <div className="bench-callout">
          <strong>{t("benchmark", "calloutStrong")}</strong>{" "}
          {t("benchmark", "calloutBody")}
        </div>

        <h2 className="bench-h2">{t("benchmark", "armsTitle")}</h2>
        <p>{t("benchmark", "armsLede")}</p>
        <div className="bench-examples">
          <article className="bench-example">
            <div className="bench-example-head">
              <strong>{t("benchmark", "armPlainTitle")}</strong>
            </div>
            <p>{t("benchmark", "armPlainBody")}</p>
          </article>
          <article className="bench-example">
            <div className="bench-example-head">
              <strong>{t("benchmark", "armDmTitle")}</strong>
            </div>
            <p>{t("benchmark", "armDmBody")}</p>
          </article>
        </div>

        <h2 className="bench-h2">{t("benchmark", "walkTitle")}</h2>
        <p>{t("benchmark", "walkLede")}</p>
        <div className="bench-walks">
          {WALKTHROUGHS.map((w) => (
            <article className="bench-walk" key={w.id}>
              <div className="bench-example-head">
                <strong>{t("benchmark", w.titleKey)}</strong>
                <span className="bench-example-id">{w.id}</span>
              </div>
              <p className="bench-walk-prompt">{t("benchmark", w.promptKey)}</p>
              <div className="bench-walk-cols">
                <div>
                  <div className="bench-walk-label">
                    {t("benchmark", "labelPlain")}
                  </div>
                  <p>{t("benchmark", w.plainKey)}</p>
                </div>
                <div>
                  <div className="bench-walk-label">
                    {t("benchmark", "labelDm")}
                  </div>
                  <p>{t("benchmark", w.dmKey)}</p>
                </div>
              </div>
              <p className="bench-walk-takeaway">
                {t("benchmark", w.takeawayKey)}
              </p>
            </article>
          ))}
        </div>

        <h2 className="bench-h2">{t("benchmark", "resultsTitle")}</h2>
        <p>{t("benchmark", "resultsLede")}</p>
        <div className="bench-panel">
          <table className="bench-table">
            <thead>
              <tr>
                <th>{t("benchmark", "thTask")}</th>
                <th>{t("benchmark", "thPlain")}</th>
                <th>{t("benchmark", "thDm")}</th>
              </tr>
            </thead>
            <tbody>
              {PHASE_C_CASES.map((c) => (
                <tr key={c.id}>
                  <td className="strong">
                    {c.id} · {t("benchmark", c.titleKey)}
                  </td>
                  <td>{t("benchmark", c.plainKey)}</td>
                  <td>{t("benchmark", c.dmKey)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="bench-faint">{t("benchmark", "resultsFaint")}</p>
        </div>

        <h2 className="bench-h2">{t("benchmark", "updatesTitle")}</h2>
        <p>{t("benchmark", "updatesLede")}</p>

        <h3 className="bench-h3">{t("benchmark", "coverageTitle")}</h3>
        <p>{t("benchmark", "coverageBody")}</p>
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
          <p className="bench-faint">{t("benchmark", "coverageFaint")}</p>
        </div>

        <h3 className="bench-h3">{t("benchmark", "outcomesTitle")}</h3>
        <p>{t("benchmark", "outcomesBody")}</p>
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
          <p className="bench-faint">{t("benchmark", "outcomesFaint")}</p>
        </div>

        <h3 className="bench-h3">{t("benchmark", "efficiencyTitle")}</h3>
        <p>{t("benchmark", "efficiencyLede")}</p>
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

        <h3 className="bench-h3">{t("benchmark", "evalFixTitle")}</h3>
        <div className="bench-panel">
          <BarRow
            label={t("benchmark", "evalFixPreLabel")}
            pct={100}
            tone="pre"
            value="28"
          />
          <BarRow
            label={t("benchmark", "evalFixPostLabel")}
            pct={53.6}
            tone="post"
            value="15"
          />
          <p className="bench-faint">{t("benchmark", "evalFixFaint")}</p>
        </div>

        <h3 className="bench-h3">{t("benchmark", "perCaseTitle")}</h3>
        <div
          className="bench-panel bench-cases"
          aria-label={t("benchmark", "perCaseAria")}
        >
          {EFFICIENCY_CASES.map((c) => (
            <div className="bench-case" key={c.id}>
              <div className="bench-case-meta">
                <span className="bench-case-title">
                  {t("benchmark", c.titleKey)}
                </span>
                <span className="bench-case-id">{c.id}</span>
              </div>
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
