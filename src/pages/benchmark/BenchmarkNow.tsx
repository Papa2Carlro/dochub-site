import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";
import { CATEGORIES, CURRENT, CURRENT_CASES } from "./data";
import { useBenchmarkUi } from "./BenchmarkStoreContext";
import { categoryRollups, casesByCategory, currentRates } from "./metrics";
import {
  CategoryPassChart,
  CostQualityChart,
  ParityPassBars,
  outcomeTone,
} from "./charts";
import { BenchmarkTaskModal } from "./BenchmarkTaskModal";

function outcomeSummary(
  md: string,
  mcp: string,
  tieLabel: string,
): { tag: "win" | "tie" | null; text: string } {
  if (mcp === "PASS" && md !== "PASS") {
    return { tag: "win", text: `${md} → ${mcp}` };
  }
  if (md === mcp) {
    return { tag: "tie", text: tieLabel };
  }
  return { tag: null, text: `${md} / ${mcp}` };
}

export function BenchmarkNow() {
  const { t } = useI18n();
  const rates = currentRates();
  const rollups = categoryRollups();
  const openCase = useBenchmarkUi((s) => s.openCase);
  const mdArm = t("benchmark", "labelMdShort");
  const mcpArm = t("benchmark", "labelMcpShort");

  return (
    <section
      className="bench-block"
      role="tabpanel"
      aria-label={t("benchmark", "tabNow")}
    >
      <p className="bench-block-meta">
        n={CURRENT.n} · {CURRENT.date} · {t("benchmark", "nowMeta")}
      </p>

      <div className="bench-badges" aria-label={t("benchmark", "badgesAria")}>
        <span className="bench-badge">
          wave-visitor-1<em>n={CURRENT.n}</em>
        </span>
        <span className="bench-badge">
          {t("benchmark", "badgeLive")}
          <em>{t("benchmark", "phaseELiveYes")}</em>
        </span>
        <span className="bench-badge">
          {t("benchmark", "badgeAdv")}
          <em>
            {CURRENT.advantageMcpPass}/{CURRENT.advantageN}
          </em>
        </span>
      </div>

      <p className="bench-fair-callout">{t("benchmark", "fairCallout")}</p>

      <h2 className="bench-h2">{t("benchmark", "chartsTitle")}</h2>
      <p className="bench-block-meta">{t("benchmark", "chartsLede")}</p>

      <CategoryPassChart
        title={t("benchmark", "catChartTitle")}
        mdLabel={mdArm}
        mcpLabel={mcpArm}
        note={t("benchmark", "catChartNote")}
        rows={rollups.map((r) => {
          const cat = CATEGORIES.find((c) => c.id === r.id)!;
          return {
            id: r.id,
            label: t("benchmark", cat.shortKey),
            mdPct: r.mdPassPct,
            mcpPct: r.mcpPassPct,
            n: r.n,
          };
        })}
      />

      <div className="bench-viz-grid">
        <ParityPassBars
          label={t("benchmark", "statAdvPass")}
          mdLabel={mdArm}
          mcpLabel={mcpArm}
          mdPct={rates.advMdPct}
          mcpPct={rates.advMcpPct}
          nLabel={`n=${CURRENT.advantageN}`}
          note={t("benchmark", "parityNote")}
        />
        <ParityPassBars
          label={t("benchmark", "statAllPass")}
          mdLabel={mdArm}
          mcpLabel={mcpArm}
          mdPct={rates.mdPassPct}
          mcpPct={rates.mcpPassPct}
          nLabel={`n=${CURRENT.n}`}
          note={t("benchmark", "allPassNote")}
        />
      </div>

      <CostQualityChart
        title={t("benchmark", "costTitle")}
        xLabel={t("benchmark", "costX")}
        yLabel={t("benchmark", "costY")}
        mdLabel={mdArm}
        mcpLabel={mcpArm}
        mdX={rates.mdMeanExtra}
        mdY={rates.mdPassPct}
        mcpX={rates.mcpMeanExtra}
        mcpY={rates.mcpPassPct}
        maxX={30}
        note={t("benchmark", "costNote")}
      />

      <h2 className="bench-h2">{t("benchmark", "jobsTitle")}</h2>
      <p className="bench-block-meta">{t("benchmark", "jobsLede")}</p>

      <div className="bench-cat-lists">
        {CATEGORIES.map((cat) => {
          const cases = casesByCategory(cat.id);
          if (cases.length === 0) return null;
          return (
            <section className="bench-cat-section" key={cat.id}>
              <h3 className="bench-h3">{t("benchmark", cat.titleKey)}</h3>
              <ul className="bench-job-list">
                {cases.map((c) => {
                  const summary = outcomeSummary(
                    c.plainOutcome,
                    c.dmOutcome,
                    t("benchmark", "outcomeTie"),
                  );
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        className="bench-job-row"
                        onClick={() => openCase(c.id)}
                      >
                        <span className="bench-job-main">
                          <strong>{t("benchmark", c.titleKey)}</strong>
                          <span className="bench-job-id">{c.id}</span>
                        </span>
                        <span className="bench-job-meta">
                          <span
                            className={`bench-pill ${
                              summary.tag === "win"
                                ? "pass"
                                : summary.tag === "tie"
                                  ? "partial"
                                  : outcomeTone(c.plainOutcome)
                            }`}
                          >
                            {summary.tag === "win"
                              ? t("benchmark", "outcomeWin")
                              : summary.text}
                          </span>
                          <span className="bench-job-open">
                            {t("benchmark", "jobOpen")}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <p className="bench-faint">
        {t("benchmark", "nowNote")} · {CURRENT_CASES.length}{" "}
        {t("benchmark", "jobsCount")}
      </p>

      <h2 className="bench-h2">{t("benchmark", "armsTitle")}</h2>
      <div className="bench-examples">
        <article className="bench-example">
          <div className="bench-example-head">
            <strong>{t("benchmark", "armMdTitle")}</strong>
          </div>
          <p>{t("benchmark", "armMdBody")}</p>
        </article>
        <article className="bench-example">
          <div className="bench-example-head">
            <strong>{t("benchmark", "armMcpTitle")}</strong>
          </div>
          <p>{t("benchmark", "armMcpBody")}</p>
        </article>
      </div>

      <div className="bench-cta-row">
        <Link className="btn btn-primary" to="/#download">
          {t("benchmark", "ctaDownload")}
        </Link>
        <p className="bench-cta-note">{t("benchmark", "ctaNote")}</p>
      </div>

      <BenchmarkTaskModal />
    </section>
  );
}
