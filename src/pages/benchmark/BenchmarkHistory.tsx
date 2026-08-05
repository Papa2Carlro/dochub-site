import { useI18n } from "../../i18n";
import {
  CASE_SCALE,
  CB001_R1,
  EXTRA_SCALE,
  PHASE_A,
  PHASE_C,
  PHASE_C_CASES,
  PHASE_D,
  PHASE_D_CASES,
  PHASE_E,
  POST_FIX,
  TIMELINE,
} from "./data";
import {
  BarRow,
  MiniBar,
  StarvationDualPanel,
  TimelineStepChart,
} from "./charts";

export function BenchmarkHistory() {
  const { t } = useI18n();

  return (
    <section
      className="bench-block"
      role="tabpanel"
      aria-label={t("benchmark", "tabHistory")}
    >
      <p className="bench-faint">{t("benchmark", "historyLede")}</p>

      <h2 className="bench-h2">{t("benchmark", "timelineTitle")}</h2>
      <TimelineStepChart
        title={t("benchmark", "timelineTitle")}
        seriesMd={t("benchmark", "labelMdShort")}
        seriesMcp={t("benchmark", "labelMcpShort")}
        points={TIMELINE.map((p) => ({
          label: p.label,
          mdY: p.mdY,
          mcpY: p.mcpY,
          unit: p.kind === "recall" ? "%" : "",
        }))}
      />
      <p className="bench-faint">{t("benchmark", "timelineNote")}</p>

      <article className="bench-version">
        <header className="bench-version-head">
          <h3 className="bench-h3">{t("benchmark", "phaseETitle")}</h3>
          <span className="bench-block-meta">{PHASE_E.date}</span>
        </header>
        <p className="bench-block-meta">{t("benchmark", "phaseEMeta")}</p>
        <p className="bench-fair-callout">{t("benchmark", "phaseECallout")}</p>
        <div className="bench-metric-row">
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseEAdvMd")}</span>
            <strong>
              {PHASE_E.advantageMdPass}/{PHASE_E.advantageN}
            </strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseEAdvMcp")}</span>
            <strong className="good">
              {PHASE_E.advantageMcpPass}/{PHASE_E.advantageN}
            </strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseEF")}</span>
            <strong>
              {PHASE_E.classFTies}/{PHASE_E.classFTies} {t("benchmark", "phaseETie")}
            </strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseELive")}</span>
            <strong className="good">{t("benchmark", "phaseELiveYes")}</strong>
          </div>
        </div>
        <p className="bench-faint">{t("benchmark", "phaseENote")}</p>
      </article>

      <article className="bench-version">
        <header className="bench-version-head">
          <h3 className="bench-h3">{t("benchmark", "phaseCTitle")}</h3>
          <span className="bench-block-meta">{PHASE_C.date}</span>
        </header>
        <p className="bench-block-meta">{t("benchmark", "phaseCMeta")}</p>
        <p className="bench-fair-callout warn">{t("benchmark", "phaseCWarn")}</p>
        <StarvationDualPanel
          title={t("benchmark", "phaseCDualTitle")}
          plainLabel={t("benchmark", "labelEmptyShort")}
          mcpLabel={t("benchmark", "labelMcpShort")}
          nLabel="n"
          cases={PHASE_C_CASES}
        />
        <p className="bench-faint">{t("benchmark", "phaseCDefer")}</p>
      </article>

      <article className="bench-version">
        <header className="bench-version-head">
          <h3 className="bench-h3">{PHASE_A.name}</h3>
          <span className="bench-block-meta">{PHASE_A.date}</span>
        </header>
        <p className="bench-block-meta">
          n={PHASE_A.n} · {t("benchmark", "phaseAMeta")}
        </p>
        <div className="bench-metric-row">
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseARecallFiles")}</span>
            <strong>{PHASE_A.baselineRecall}%</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseARecallDm")}</span>
            <strong className="good">{PHASE_A.dmRecall}%</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseADelta")}</span>
            <strong className="accent">+{PHASE_A.deltaPp} pp</strong>
          </div>
        </div>
        <div className="bench-panel">
          <BarRow
            label={t("benchmark", "barFiles")}
            pct={PHASE_A.baselineRecall}
            tone="baseline"
          />
          <BarRow
            label={t("benchmark", "barDm")}
            pct={PHASE_A.dmRecall}
            tone="dochub"
          />
        </div>
      </article>

      <article className="bench-version">
        <header className="bench-version-head">
          <h3 className="bench-h3">{PHASE_D.name}</h3>
          <span className="bench-block-meta">{PHASE_D.date}</span>
        </header>
        <p className="bench-block-meta">
          n={PHASE_D.n} · {t("benchmark", "phaseBMeta")}
        </p>
        <div className="bench-metric-row">
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBPassBase")}</span>
            <strong>
              {PHASE_D.mdPass}/{PHASE_D.n}
            </strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBPassDm")}</span>
            <strong>
              {PHASE_D.mcpPass}/{PHASE_D.n}
            </strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBExtraBase")}</span>
            <strong>{PHASE_D.mdMeanExtra}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBExtraDm")}</span>
            <strong>{PHASE_D.mcpMeanExtra}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBDelta")}</span>
            <strong>+{PHASE_D.deltaExtra.toFixed(1)}</strong>
          </div>
        </div>
        <div
          className="bench-panel bench-cases"
          aria-label={t("benchmark", "phaseDPerCaseAria")}
        >
          {PHASE_D_CASES.map((c) => (
            <div className="bench-case" key={c.id}>
              <div className="bench-case-meta">
                <span className="bench-case-title">
                  {t("benchmark", c.titleKey)}
                  {c.extension ? (
                    <span className="bench-case-id"> · {t("benchmark", "phaseDExtTag")}</span>
                  ) : null}
                </span>
                <span className="bench-case-id">{c.id}</span>
              </div>
              <div className="bench-case-bars">
                <MiniBar
                  label={t("benchmark", "labelMdShort")}
                  width={(c.mdExtra / EXTRA_SCALE) * 100}
                  value={c.mdExtra}
                  tone="md"
                />
                <MiniBar
                  label={t("benchmark", "labelMcpShort")}
                  width={(c.mcpExtra / EXTRA_SCALE) * 100}
                  value={c.mcpExtra}
                  tone="mcp"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="bench-faint">{t("benchmark", "phaseBNote")}</p>
      </article>

      <article className="bench-version">
        <header className="bench-version-head">
          <h3 className="bench-h3">{CB001_R1.name}</h3>
          <span className="bench-block-meta">{CB001_R1.date}</span>
        </header>
        <p className="bench-block-meta">{t("benchmark", "cb001Meta")}</p>
        <div className="bench-metric-row">
          <div className="bench-mini-metric">
            <span>{t("benchmark", "cb001Before")}</span>
            <strong>{CB001_R1.before}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "cb001After")}</span>
            <strong className="good">{CB001_R1.after}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "cb001Reduction")}</span>
            <strong className="good">−{CB001_R1.reductionPct}%</strong>
          </div>
        </div>
      </article>

      <article className="bench-version">
        <header className="bench-version-head">
          <h3 className="bench-h3">{POST_FIX.name}</h3>
          <span className="bench-block-meta">{POST_FIX.date}</span>
        </header>
        <p className="bench-block-meta">
          n={POST_FIX.n} · {t("benchmark", "postFixMeta")}
        </p>
        <div className="bench-metric-row">
          <div className="bench-mini-metric">
            <span>{t("benchmark", "postFixBefore")}</span>
            <strong>{POST_FIX.beforeMean}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "postFixAfter")}</span>
            <strong className="good">{POST_FIX.afterMean}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "postFixReduction")}</span>
            <strong className="good">−{POST_FIX.reductionPct}%</strong>
          </div>
        </div>
        <div
          className="bench-panel bench-cases"
          aria-label={t("benchmark", "postFixPerCaseAria")}
        >
          {POST_FIX.cases.map((c) => (
            <div className="bench-case" key={c.id}>
              <div className="bench-case-meta">
                <span className="bench-case-title">
                  {t("benchmark", c.titleKey)}
                </span>
                <span className="bench-case-id">{c.id}</span>
              </div>
              <div className="bench-case-bars">
                <MiniBar
                  label={t("benchmark", "labelBefore")}
                  width={(c.before / CASE_SCALE) * 100}
                  value={c.before}
                  tone="pre"
                />
                <MiniBar
                  label={t("benchmark", "labelAfter")}
                  width={(c.after / CASE_SCALE) * 100}
                  value={c.after}
                  tone="post"
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
