import { Link } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { ControlledWorkflow } from "../components/ControlledWorkflow";
import { DownloadBand } from "../components/DownloadBand";
import { Faq } from "../components/Faq";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Packs } from "../components/Packs";
import { Promo } from "../components/Promo";
import { Screens } from "../components/Screens";
import { SiteHeader } from "../components/SiteHeader";
import { Support } from "../components/Support";
import { Waitlist } from "../components/Waitlist";
import { WhatsNew } from "../components/WhatsNew";
import { useI18n } from "../i18n";
import { FEEDBACK_EMAIL, FEEDBACK_MAILTO } from "../lib/contact";

export function HomePage() {
  const { t } = useI18n();
  return (
    <div className="page">
      <Analytics />
      <SiteHeader variant="home" />

      <Hero />
      <HowItWorks />
      <Screens />
      <ControlledWorkflow />
      <Features />
      <Packs />
      <Support />
      <WhatsNew />
      <Promo />
      <Waitlist />
      <Faq />
      <DownloadBand />

      <footer className="foot">
        <span>{t("footer", "tagline")}</span>
        <span className="foot-links">
          <a href="/privacy/">{t("footer", "privacy")}</a>
          <a href="/press/">{t("footer", "press")}</a>
          <Link to="/benchmark">{t("footer", "benchmark")}</Link>
          <a href="#support">{t("footer", "support")}</a>
          <a href={FEEDBACK_MAILTO}>{FEEDBACK_EMAIL}</a>
          <a href="#waitlist">{t("footer", "notify")}</a>
          <a href="#download">{t("footer", "download")}</a>
        </span>
      </footer>
    </div>
  );
}
