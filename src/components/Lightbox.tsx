import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { Shot } from "../lib/shots";

export function Lightbox({
  shots,
  index,
  onClose,
  onIndexChange,
}: {
  shots: Shot[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
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
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="lightbox-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-toolbar">
          <p id={titleId} className="lightbox-caption">
            {shot.caption}
            <span className="lightbox-count">
              {" "}
              · {index + 1}/{shots.length}
            </span>
          </p>
          <button
            ref={closeRef}
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close"
          >
            Close
          </button>
        </div>
        <img
          className="lightbox-img"
          src={shot.src}
          alt={shot.alt}
          width={3456}
          height={2168}
        />
        {shots.length > 1 ? (
          <div className="lightbox-nav">
            <button
              type="button"
              className="lightbox-nav-btn"
              onClick={() =>
                onIndexChange((index - 1 + shots.length) % shots.length)
              }
              aria-label="Previous screenshot"
            >
              Previous
            </button>
            <button
              type="button"
              className="lightbox-nav-btn"
              onClick={() => onIndexChange((index + 1) % shots.length)}
              aria-label="Next screenshot"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
