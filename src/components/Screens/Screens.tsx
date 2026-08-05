import { useCallback, useState, type FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { SHOTS, SHOT_ALT_KEY, SHOT_CAPTION_KEY, type Shot } from "lib/shots";
import { Lightbox } from "../Lightbox";
import scss from "./Screens.module.scss";

const cn = classNames.bind(scss);

const Screens: FC = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onIndexChange = useCallback((next: number) => {
    setOpenIndex(next);
  }, []);

  const resolved: (Shot & { caption: string; alt: string })[] = SHOTS.map((shot) => ({
    ...shot,
    caption: t("screens", SHOT_CAPTION_KEY[shot.id]),
    alt: t("screens", SHOT_ALT_KEY[shot.id]),
  }));

  return (
    <section className={`band ${cn("Screens")}`} id="screens" aria-labelledby="screens-title">
      <h2 id="screens-title">{t("screens", "title")}</h2>
      <p>{t("screens", "lede")}</p>
      <ul className={cn("Screens__grid")}>
        {resolved.map((shot, i) => (
          <li key={shot.src}>
            <figure className={cn("Screens__figure")}>
              <button
                type="button"
                className={cn("Screens__open")}
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
              <figcaption className={cn("Screens__caption")}>{shot.caption}</figcaption>
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
};

export { Screens };
