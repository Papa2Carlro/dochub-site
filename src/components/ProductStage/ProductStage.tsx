import { useCallback, useState, type FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { SHOTS, SHOT_ALT_KEY, SHOT_CAPTION_KEY } from "lib/shots";
import { Lightbox } from "components/Lightbox";
import scss from "./ProductStage.module.scss";

const cn = classNames.bind(scss);

/** Hero product plane — real Doc Hub board screenshot (click to enlarge). */
const ProductStage: FC = () => {
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
      <div className={cn("ProductStage")}>
        <button
          type="button"
          className={cn("ProductStage__window", "shot", "open")}
          onClick={() => setOpenIndex(0)}
          aria-label={t("hero", "stageAriaOpen")}
        >
          <div className={cn("ProductStage__chrome")}>
            <span className={cn("ProductStage__dot")} />
            <span className={cn("ProductStage__dot")} />
            <span className={cn("ProductStage__dot")} />
            <span className={cn("ProductStage__chromeTitle")}>Doc Hub</span>
          </div>
          <img
            className={cn("ProductStage__shot")}
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
};

export { ProductStage };
