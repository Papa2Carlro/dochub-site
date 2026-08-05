import { useCallback, useState } from "react";
import { useI18n } from "../i18n";
import {
  SHOTS,
  SHOT_ALT_KEY,
  SHOT_CAPTION_KEY,
} from "../lib/shots";
import { Lightbox } from "./Lightbox";

/** Hero product plane — real Doc Hub board screenshot (click to enlarge). */
export function ProductStage() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onIndexChange = useCallback((next: number) => {
    setOpenIndex(next);
  }, []);

  const resolved = SHOTS.map((shot) => ({
    ...shot,
    caption: t("screens", SHOT_CAPTION_KEY[shot.id]),
    alt: t("screens", SHOT_ALT_KEY[shot.id]),
  }));

  return (
    <>
      <div className="stage">
        <button
          type="button"
          className="stage-window stage-window--shot stage-open"
          onClick={() => setOpenIndex(0)}
          aria-label={t("hero", "stageAriaOpen")}
        >
          <div className="stage-chrome">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="chrome-title">Doc Hub</span>
          </div>
          <img
            className="stage-shot"
            src="./screens/portfolio-task-board.png"
            alt={t("hero", "stageAlt")}
            width={3456}
            height={2168}
            decoding="async"
          />
        </button>
      </div>
      {openIndex != null ? (
        <Lightbox
          shots={resolved}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={onIndexChange}
        />
      ) : null}
    </>
  );
}
