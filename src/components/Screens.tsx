import { useCallback, useState } from "react";
import { useI18n } from "../i18n";
import {
  SHOTS,
  SHOT_ALT_KEY,
  SHOT_CAPTION_KEY,
  type Shot,
} from "../lib/shots";
import { Lightbox } from "./Lightbox";

export function Screens() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onIndexChange = useCallback((next: number) => {
    setOpenIndex(next);
  }, []);

  const resolved: (Shot & { caption: string; alt: string })[] = SHOTS.map(
    (shot) => ({
      ...shot,
      caption: t("screens", SHOT_CAPTION_KEY[shot.id]),
      alt: t("screens", SHOT_ALT_KEY[shot.id]),
    }),
  );

  return (
    <section
      className="band screens"
      id="screens"
      aria-labelledby="screens-title"
    >
      <h2 id="screens-title">{t("screens", "title")}</h2>
      <p>{t("screens", "lede")}</p>
      <ul className="screen-grid">
        {resolved.map((shot, i) => (
          <li key={shot.src}>
            <figure>
              <button
                type="button"
                className="screen-open"
                onClick={() => setOpenIndex(i)}
                aria-label={t("screens", "openAria", { caption: shot.caption })}
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
          shots={resolved}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={onIndexChange}
        />
      ) : null}
    </section>
  );
}
