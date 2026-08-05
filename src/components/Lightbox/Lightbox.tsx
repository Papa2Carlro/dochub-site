import { useEffect, useId, useRef, type FC } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import type { Shot } from "lib/shots";
import scss from "./Lightbox.module.scss";

const cn = classNames.bind(scss);

type LightboxShot = Shot & { caption: string; alt: string };

type LightboxProps = {
  shots: LightboxShot[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
};

const Lightbox: FC<LightboxProps> = ({ shots, index, onClose, onIndexChange }) => {
  const { t } = useI18n();
  const shot = shots[index];
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onIndexChange((index + 1) % shots.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onIndexChange((index - 1 + shots.length) % shots.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onIndexChange, shots.length]);

  if (!shot) return null;

  return createPortal(
    <div
      className={cn("Lightbox")}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div className={cn("Lightbox__panel")} onClick={(e) => e.stopPropagation()}>
        <div className={cn("Lightbox__toolbar")}>
          <p id={titleId} className={cn("Lightbox__caption")}>
            {shot.caption}
            <span className={cn("Lightbox__count")}>
              {" "}
              · {index + 1}/{shots.length}
            </span>
          </p>
          <button
            ref={closeRef}
            type="button"
            className={cn("Lightbox__btn")}
            onClick={onClose}
            aria-label={t("screens", "close")}
          >
            {t("screens", "close")}
          </button>
        </div>
        <img
          className={cn("Lightbox__img")}
          src={shot.src}
          alt={shot.alt}
          width={3456}
          height={2168}
        />
        {shots.length > 1 ? (
          <div className={cn("Lightbox__nav")}>
            <button
              type="button"
              className={cn("Lightbox__btn")}
              onClick={() => onIndexChange((index - 1 + shots.length) % shots.length)}
              aria-label={t("screens", "previousAria")}
            >
              {t("screens", "previous")}
            </button>
            <button
              type="button"
              className={cn("Lightbox__btn")}
              onClick={() => onIndexChange((index + 1) % shots.length)}
              aria-label={t("screens", "nextAria")}
            >
              {t("screens", "next")}
            </button>
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
};

export { Lightbox };
export type { LightboxProps, LightboxShot };
