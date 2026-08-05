import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";
import { CURRENT, CURRENT_CASES, PHASE_A_RECALL, WALKTHROUGHS } from "./data";
import { currentRates } from "./metrics";
import {
  CostQualityChart,
  ParityPassBars,
  PerTaskDualPanel,
  StackedRecallBar,
} from "./charts";

export function BenchmarkNow() {
  const { t } = useI18n();
  const rates = currentRates();
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
      <p className="bench-fair-callout">{t("benchmark", "fairCallout")}</p>

      <div className="bench-legend-row" aria-hidden="true">
        <span className="bench-legend-item without">
          <i />
          {t("benchmark", "labelMd")}
        </span>
        <span className="bench-legend-item with">
          <i />
          {t("benchmark", "labelMcp")}
        </span>
      </div>

      <div className="bench-viz-grid">
        <ParityPassBars
          label={t("benchmark", "statPassRate")}
          mdLabel={mdArm}
          mcpLabel={mcpArm}
          mdPct={rates.mdPassPct}
          mcpPct={rates.mcpPassPct}
          nLabel={`n=${CURRENT.n}`}
          note={t("benchmark", "parityNote")}
        />
        <StackedRecallBar
          label={t("benchmark", "statRecall")}
          basePct={PHASE_A_RECALL.mdRecall}
          withPct={PHASE_A_RECALL.mcpRecall}
          baseCaption={t("benchmark", "recallBase")}
          deltaCaption={t("benchmark", "recallDelta")}
          nLabel={`n=${PHASE_A_RECALL.n} · Phase A`}
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
        maxX={40}
        note={t("benchmark", "costNote")}
      />

      <div className="bench-delta-strip" aria-label={t("benchmark", "deltaTitle")}>
        <div className="bench-delta">
          <span>{t("benchmark", "statPassRate")}</span>
          <strong>0 pp</strong>
        </div>
        <div className="bench-delta">
          <span>{t("benchmark", "statRecall")}</span>
          <strong className="good">+{rates.recallDelta} pp</strong>
        </div>
        <div className="bench-delta">
          <span>{t("benchmark", "statExtras")}</span>
          <strong>+{rates.deltaExtra.toFixed(1)}</strong>
        </div>
      </div>

      <p className="bench-faint">{t("benchmark", "nowNote")}</p>

      <div className="bench-cta-row">
        <Link className="btn btn-primary" to="/#download">
          {t("benchmark", "ctaDownload")}
        </Link>
        <p className="bench-cta-note">{t("benchmark", "ctaNote")}</p>
      </div>

      <h2 className="bench-h2">{t("benchmark", "perTaskTitle")}</h2>
      <p className="bench-block-meta">{t("benchmark", "perTaskLede")}</p>
      <PerTaskDualPanel
        title={t("benchmark", "dualTitle")}
        rateLabel={t("benchmark", "dualRate")}
        nLabel={t("benchmark", "dualN")}
        mdLabel={mdArm}
        mcpLabel={mcpArm}
        cases={CURRENT_CASES.map((c) => ({
          id: c.id,
          mdPass: c.plainOutcome === "PASS",
          mcpPass: c.dmOutcome === "PASS",
          mdExtra: c.mdExtra,
          mcpExtra: c.mcpExtra,
        }))}
      />

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
                <div className="bench-walk-label">{t("benchmark", "labelMd")}</div>
                <p>{t("benchmark", w.plainKey)}</p>
              </div>
              <div>
                <div className="bench-walk-label">{t("benchmark", "labelMcp")}</div>
                <p>{t("benchmark", w.dmKey)}</p>
              </div>
            </div>
            <p className="bench-walk-takeaway">{t("benchmark", w.takeawayKey)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
