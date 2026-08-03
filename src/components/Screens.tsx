import { useCallback, useState } from "react";
import { SHOTS } from "../lib/shots";
import { Lightbox } from "./Lightbox";

export function Screens() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onIndexChange = useCallback((next: number) => {
    setOpenIndex(next);
  }, []);

  return (
    <section
      className="band screens"
      id="screens"
      aria-labelledby="screens-title"
    >
      <h2 id="screens-title">See it in the wild</h2>
      <p>
        Planning board, dashboard audit, and Trophy Room — click any shot to
        enlarge.
      </p>
      <ul className="screen-grid">
        {SHOTS.map((shot, i) => (
          <li key={shot.src}>
            <figure>
              <button
                type="button"
                className="screen-open"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${shot.caption} fullscreen`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  width={3456}
                  height={2168}
                  decoding="async"
                />
              </button>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {openIndex != null ? (
        <Lightbox
          shots={SHOTS}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={onIndexChange}
        />
      ) : null}
    </section>
  );
}
