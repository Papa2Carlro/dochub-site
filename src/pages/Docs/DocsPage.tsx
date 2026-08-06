import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { SiteHeader } from "components/SiteHeader";
import { useI18n } from "i18n";
import { FEEDBACK_EMAIL, FEEDBACK_MAILTO } from "lib/contact";
import scss from "./DocsPage.module.scss";

const cn = classNames.bind(scss);

const SECTIONS = [
  { id: "install", titleKey: "installTitle" },
  { id: "workspace", titleKey: "workspaceTitle" },
  { id: "daily", titleKey: "dailyTitle" },
  { id: "agents", titleKey: "agentsTitle" },
  { id: "tools", titleKey: "toolsTitle" },
  { id: "packs", titleKey: "packsTitle" },
  { id: "trust", titleKey: "trustTitle" },
  { id: "help", titleKey: "helpTitle" },
] as const;

const TOOL_FAMILIES = [
  { id: "boot", titleKey: "toolsBootTitle", bodyKey: "toolsBootBody", cmdsKey: "toolsBootCmds", mcpKey: "toolsBootMcp" },
  { id: "lookup", titleKey: "toolsLookupTitle", bodyKey: "toolsLookupBody", cmdsKey: "toolsLookupCmds", mcpKey: "toolsLookupMcp" },
  { id: "repos", titleKey: "toolsReposTitle", bodyKey: "toolsReposBody", cmdsKey: "toolsReposCmds", mcpKey: "toolsReposMcp" },
  { id: "safety", titleKey: "toolsSafetyTitle", bodyKey: "toolsSafetyBody", cmdsKey: "toolsSafetyCmds", mcpKey: "toolsSafetyMcp" },
  { id: "handoff", titleKey: "toolsHandoffTitle", bodyKey: "toolsHandoffBody", cmdsKey: "toolsHandoffCmds", mcpKey: "toolsHandoffMcp" },
  { id: "craft", titleKey: "toolsCraftTitle", bodyKey: "toolsCraftBody", cmdsKey: "toolsCraftCmds", mcpKey: "toolsCraftMcp" },
  { id: "ops", titleKey: "toolsOpsTitle", bodyKey: "toolsOpsBody", cmdsKey: "toolsOpsCmds", mcpKey: "toolsOpsMcp" },
] as const;

const DocsPage: FC = () => {
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`page ${cn("DocsPage")}`}>
      <SiteHeader variant="page" />

      <main className={`band ${cn("DocsPage__main")}`}>
        <p className={cn("DocsPage__crumb")}>
          <Link to="/">{t("docs", "crumbHome")}</Link>
          <span>{t("docs", "crumbCurrent")}</span>
        </p>
        <h1 className={cn("DocsPage__title")}>{t("docs", "title")}</h1>
        <p className={cn("DocsPage__lede")}>{t("docs", "lede")}</p>

        <nav className={cn("DocsPage__toc")} aria-label={t("docs", "tocLabel")}>
          {SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {t("docs", section.titleKey)}
            </a>
          ))}
        </nav>

        <section className={cn("DocsPage__section")} id="install">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "installTitle")}</h2>
          <ol className={cn("DocsPage__steps")}>
            <li>
              <strong>{t("docs", "installStep1Title")}</strong>
              <p>{t("docs", "installStep1Body")}</p>
            </li>
            <li>
              <strong>{t("docs", "installStep2Title")}</strong>
              <p>{t("docs", "installStep2Body")}</p>
            </li>
            <li>
              <strong>{t("docs", "installStep3Title")}</strong>
              <p>{t("docs", "installStep3Body")}</p>
            </li>
          </ol>
          <p className={cn("DocsPage__ctaRow")}>
            <Link className={cn("DocsPage__cta")} to="/#download">
              {t("docs", "installCta")}
            </Link>
          </p>
        </section>

        <section className={cn("DocsPage__section")} id="workspace">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "workspaceTitle")}</h2>
          <p>{t("docs", "workspaceBody")}</p>
          <ul className={cn("DocsPage__list")}>
            <li>{t("docs", "workspaceLi1")}</li>
            <li>{t("docs", "workspaceLi2")}</li>
            <li>{t("docs", "workspaceLi3")}</li>
          </ul>
          <pre className={cn("DocsPage__code")}>{t("docs", "workspaceExample")}</pre>
        </section>

        <section className={cn("DocsPage__section")} id="daily">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "dailyTitle")}</h2>
          <p>{t("docs", "dailyBody")}</p>
          <div className={cn("DocsPage__grid")}>
            <article className={cn("DocsPage__card")}>
              <strong>{t("docs", "dailyBoardTitle")}</strong>
              <p>{t("docs", "dailyBoardBody")}</p>
            </article>
            <article className={cn("DocsPage__card")}>
              <strong>{t("docs", "dailyDocsTitle")}</strong>
              <p>{t("docs", "dailyDocsBody")}</p>
            </article>
            <article className={cn("DocsPage__card")}>
              <strong>{t("docs", "dailyOrbitTitle")}</strong>
              <p>{t("docs", "dailyOrbitBody")}</p>
            </article>
          </div>
        </section>

        <section className={cn("DocsPage__section")} id="agents">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "agentsTitle")}</h2>
          <p>{t("docs", "agentsBody")}</p>
          <ol className={cn("DocsPage__steps")}>
            <li>
              <strong>{t("docs", "agentsStep1Title")}</strong>
              <p>{t("docs", "agentsStep1Body")}</p>
            </li>
            <li>
              <strong>{t("docs", "agentsStep2Title")}</strong>
              <p>{t("docs", "agentsStep2Body")}</p>
            </li>
            <li>
              <strong>{t("docs", "agentsStep3Title")}</strong>
              <p>{t("docs", "agentsStep3Body")}</p>
            </li>
          </ol>
          <pre className={cn("DocsPage__code")}>{t("docs", "agentsExample")}</pre>
          <div className={cn("DocsPage__callout")}>
            <strong>{t("docs", "agentsCalloutStrong")}</strong> {t("docs", "agentsCalloutBody")}{" "}
            <a href="#tools">{t("docs", "agentsToolsLink")}</a>
          </div>
        </section>

        <section className={cn("DocsPage__section")} id="tools">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "toolsTitle")}</h2>
          <p>{t("docs", "toolsLede")}</p>
          <div className={cn("DocsPage__callout")}>
            <strong>{t("docs", "toolsMirrorStrong")}</strong> {t("docs", "toolsMirrorBody")}
          </div>

          <div className={cn("DocsPage__toolList")}>
            {TOOL_FAMILIES.map((family) => (
              <article key={family.id} className={cn("DocsPage__tool")}>
                <h3 className={cn("DocsPage__h3")}>{t("docs", family.titleKey)}</h3>
                <p>{t("docs", family.bodyKey)}</p>
                <pre className={cn("DocsPage__code")}>{t("docs", family.cmdsKey)}</pre>
                <p className={cn("DocsPage__toolMcp")}>
                  <span>{t("docs", "toolsMcpLabel")}</span> {t("docs", family.mcpKey)}
                </p>
              </article>
            ))}
          </div>

          <h3 className={cn("DocsPage__h3")}>{t("docs", "toolsBoardTitle")}</h3>
          <p>{t("docs", "toolsBoardBody")}</p>
          <p className={cn("DocsPage__toolMcp")}>
            <span>{t("docs", "toolsMcpLabel")}</span> {t("docs", "toolsBoardMcp")}
          </p>

          <h3 className={cn("DocsPage__h3")}>{t("docs", "toolsMapTitle")}</h3>
          <p>{t("docs", "toolsMapBody")}</p>
          <pre className={cn("DocsPage__code", "DocsPage__code_wide")}>{t("docs", "toolsMapCmds")}</pre>
          <p className={cn("DocsPage__faint")}>{t("docs", "toolsMapHint")}</p>
        </section>

        <section className={cn("DocsPage__section")} id="packs">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "packsTitle")}</h2>
          <p>{t("docs", "packsBody")}</p>
          <ul className={cn("DocsPage__list")}>
            <li>{t("docs", "packsLi1")}</li>
            <li>{t("docs", "packsLi2")}</li>
            <li>{t("docs", "packsLi3")}</li>
          </ul>
          <p className={cn("DocsPage__ctaRow")}>
            <Link className={cn("DocsPage__cta", "DocsPage__cta_ghost")} to="/#packs">
              {t("docs", "packsCta")}
            </Link>
          </p>
        </section>

        <section className={cn("DocsPage__section")} id="trust">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "trustTitle")}</h2>
          <p>{t("docs", "trustBody")}</p>
          <ul className={cn("DocsPage__list")}>
            <li>{t("docs", "trustLi1")}</li>
            <li>{t("docs", "trustLi2")}</li>
            <li>{t("docs", "trustLi3")}</li>
          </ul>
        </section>

        <section className={cn("DocsPage__section")} id="help">
          <h2 className={cn("DocsPage__h2")}>{t("docs", "helpTitle")}</h2>
          <p>{t("docs", "helpBody")}</p>
          <p>
            <a href={FEEDBACK_MAILTO}>{FEEDBACK_EMAIL}</a>
            {" · "}
            <Link to="/#faq">{t("docs", "helpFaq")}</Link>
            {" · "}
            <Link to="/benchmark">{t("docs", "helpBenchmark")}</Link>
          </p>
        </section>

        <p className={cn("DocsPage__foot")}>
          <Link to="/">{t("docs", "footBack")}</Link>
          {" · "}
          <Link to="/#download">{t("docs", "footDownload")}</Link>
        </p>
      </main>
    </div>
  );
};

export { DocsPage };
