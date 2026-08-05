import { FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import { SOCIAL_LINKS } from "lib/socials";
import scss from "./SocialLinks.module.scss";

const cn = classNames.bind(scss);

type SocialLinksProps = {
  /** Visual density — footer stays quiet; band gets a short lead-in. */
  variant?: "footer" | "band";
  className?: string;
};

const SocialLinks: FC<SocialLinksProps> = ({ variant = "band", className }) => {
  const { t } = useI18n();

  return (
    <nav className={cn("SocialLinks", variant, className)} aria-label={t("social", "navLabel")}>
      {variant === "band" ? <p className={cn("SocialLinks__lede")}>{t("social", "lede")}</p> : null}
      <ul className={cn("SocialLinks__list")}>
        {SOCIAL_LINKS.map((link) => (
          <li key={link.id}>
            <a href={link.href} target="_blank" rel="noopener noreferrer me" title={`${link.label} ${link.handle}`}>
              <span className={cn("SocialLinks__label")}>{link.label}</span>
              <span className={cn("SocialLinks__handle")}>{link.handle}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { SocialLinks };
export type { SocialLinksProps };
