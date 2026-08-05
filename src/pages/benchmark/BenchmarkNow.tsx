import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";
import { CURRENT, CURRENT_CASES, WALKTHROUGHS } from "./data";
import { currentRates } from "./metrics";
import {
  CostQualityChart,
  ParityPassBars,
  PerTaskDualPanel,
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
          label={t("benchmark", "statAdvPass")}
          mdLabel={mdArm}
          mcpLabel={mcpArm}
          mdPct={rates.advMdPct}
          mcpPct={rates.advMcpPct}
          nLabel={`n=${CURRENT.advantageN} · A–E`}
          note={t("benchmark", "parityNote")}
        />
        <ParityPassBars
          label={t("benchmark", "statAllPass")}
          mdLabel={mdArm}
          mcpLabel={mcpArm}
          mdPct={rates.mdPassPct}
          mcpPct={rates.mcpPassPct}
          nLabel={`n=${CURRENT.n} · +F`}
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

      <div className="bench-delta-strip" aria-label={t("benchmark", "deltaTitle")}>
        <div className="bench-delta">
          <span>{t("benchmark", "statAdvPass")}</span>
          <strong className="good">+{rates.advDeltaPp.toFixed(0)} pp</strong>
        </div>
        <div className="bench-delta">
          <span>{t("benchmark", "phaseEF")}</span>
          <strong>
            {CURRENT.classFTies}/{CURRENT.classFTies} {t("benchmark", "phaseETie")}
          </strong>
        </div>
        <div className="bench-delta">
          <span>{t("benchmark", "statExtras")}</span>
          <strong>+{rates.deltaExtra.toFixed(1)}</strong>
        </div>
        <div className="bench-delta">
          <span>{t("benchmark", "phaseELive")}</span>
          <strong className="good">{t("benchmark", "phaseELiveYes")}</strong>
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
          id: `${c.id}·${c.klass}`,
          mdPass: c.plainOutcome === "PASS",
          mcpPass: c.dmOutcome === "PASS",
          mdOutcome: c.plainOutcome,
          mcpOutcome: c.dmOutcome,
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
