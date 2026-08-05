import { useI18n } from "../../i18n";
import {
  CASE_SCALE,
  CB001_R1,
  PHASE_A,
  PHASE_B,
  PHASE_C,
  PHASE_C_CASES,
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
          <h3 className="bench-h3">{PHASE_B.name}</h3>
          <span className="bench-block-meta">{PHASE_B.date}</span>
        </header>
        <p className="bench-block-meta">
          n={PHASE_B.n} · {t("benchmark", "phaseBMeta")}
        </p>
        <div className="bench-metric-row">
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBPassBase")}</span>
            <strong>
              {PHASE_B.baselinePass}/{PHASE_B.n}
            </strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBPassDm")}</span>
            <strong>
              {PHASE_B.dmPass}/{PHASE_B.n}
            </strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBExtraBase")}</span>
            <strong>{PHASE_B.baselineMeanExtra}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBExtraDm")}</span>
            <strong>{PHASE_B.dmMeanExtra}</strong>
          </div>
          <div className="bench-mini-metric">
            <span>{t("benchmark", "phaseBDelta")}</span>
            <strong>+{PHASE_B.deltaExtra.toFixed(1)}</strong>
          </div>
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
