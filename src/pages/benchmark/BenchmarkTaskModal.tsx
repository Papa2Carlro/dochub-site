import { useEffect, useId, useRef, type FC } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../../i18n";
import { CURRENT_CASES } from "./data";
import { useBenchmarkUi } from "./BenchmarkStoreContext";
import { findWalk } from "./metrics";
import { outcomeTone } from "./charts";
import scss from "./Benchmark.module.scss";

export const BenchmarkTaskModal: FC = () => {
  const { t } = useI18n();
  const selectedCaseId = useBenchmarkUi((s) => s.selectedCaseId);
  const closeCase = useBenchmarkUi((s) => s.closeCase);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const row = CURRENT_CASES.find((c) => c.id === selectedCaseId) ?? null;
  const walk = row ? findWalk(row.id) : undefined;

  useEffect(() => {
    if (!row) return;

    const scrollY = window.scrollY;
    const scrollbar = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    const prev = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
    };

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) {
      document.body.style.paddingRight = `${scrollbar}px`;
    }
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    closeRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCase();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev.overflow;
      document.body.style.paddingRight = prev.paddingRight;
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKey);
    };
  }, [row, closeCase]);

  if (!row) return null;

  const maxExtra = Math.max(row.mdExtra, row.mcpExtra, 1);
  const mdArm = t("benchmark", "labelMdShort");
  const mcpArm = t("benchmark", "labelMcpShort");

  // Host must carry `.Benchmark` so scoped :global(.bench-*) styles apply after portal.
  return createPortal(
    <div className={scss.Benchmark} data-bench-modal-host="">
      <div
        className="bench-modal-root"
        role="presentation"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) closeCase();
        }}
      >
        <div
          className="bench-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="bench-modal-head">
            <div>
              <h2 id={titleId} className="bench-modal-title">
                {t("benchmark", row.titleKey)}
              </h2>
              <p className="bench-modal-id">{row.id}</p>
            </div>
            <button
              ref={closeRef}
              type="button"
              className="bench-modal-close"
              onClick={closeCase}
              aria-label={t("benchmark", "modalClose")}
            >
              ×
            </button>
          </div>

          <div className="bench-dual-pills bench-modal-pills">
            <span className={`bench-pill ${outcomeTone(row.plainOutcome)}`}>
              {mdArm} {row.plainOutcome}
            </span>
            <span className={`bench-pill ${outcomeTone(row.dmOutcome)}`}>
              {mcpArm} {row.dmOutcome}
            </span>
          </div>

          {walk ? (
            <>
              <p className="bench-walk-prompt">{t("benchmark", walk.promptKey)}</p>
              <div className="bench-walk-cols">
                <div>
                  <div className="bench-walk-label">{t("benchmark", "labelMd")}</div>
                  <p>{t("benchmark", walk.plainKey)}</p>
                </div>
                <div>
                  <div className="bench-walk-label">{t("benchmark", "labelMcp")}</div>
                  <p>{t("benchmark", walk.dmKey)}</p>
                </div>
              </div>
              <p className="bench-walk-takeaway">{t("benchmark", walk.takeawayKey)}</p>
            </>
          ) : (
            <p className="bench-faint">{t("benchmark", "modalNoWalk")}</p>
          )}

          <h3 className="bench-h3">{t("benchmark", "modalMetrics")}</h3>
          <div className="bench-modal-metrics">
            <div className="bench-dual-bars">
              <span className="bench-dual-id">{t("benchmark", "statExtras")}</span>
              <div className="bench-mini-pair">
                <div
                  className="bench-mini-fill md"
                  style={{ width: `${(row.mdExtra / maxExtra) * 100}%` }}
                />
                <em>
                  {mdArm} {row.mdExtra}
                </em>
              </div>
              <div className="bench-mini-pair">
                <div
                  className="bench-mini-fill mcp"
                  style={{ width: `${(row.mcpExtra / maxExtra) * 100}%` }}
                />
                <em>
                  {mcpArm} {row.mcpExtra}
                </em>
              </div>
            </div>
            <p className="bench-faint">
              {t("benchmark", "modalCrit")}: {mdArm} {row.plainCritMiss}/
              {row.plainCritN} · {mcpArm} {row.dmCritMiss}/{row.dmCritN}
            </p>
          </div>

          <button type="button" className="btn btn-primary" onClick={closeCase}>
            {t("benchmark", "modalClose")}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
