import { useCallback, useState } from "react";
import { SHOTS } from "../lib/shots";
import { Lightbox } from "./Lightbox";

/** Hero product plane — real Doc Hub board screenshot (click to enlarge). */
export function ProductStage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onIndexChange = useCallback((next: number) => {
    setOpenIndex(next);
  }, []);

  return (
    <>
      <div className="stage">
        <button
          type="button"
          className="stage-window stage-window--shot stage-open"
          onClick={() => setOpenIndex(0)}
          aria-label="Open Task board screenshot fullscreen"
        >
          <div className="stage-chrome">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="chrome-title">Doc Hub</span>
          </div>
          <img
            className="stage-shot"
            src="./screens/board.png"
            alt="Doc Hub task board"
            width={3456}
            height={2168}
            decoding="async"
          />
        </button>
      </div>
      {openIndex != null ? (
        <Lightbox
          shots={SHOTS}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={onIndexChange}
        />
      ) : null}
    </>
  );
}
