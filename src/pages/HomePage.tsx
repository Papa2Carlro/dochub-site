import { ControlledWorkflow } from "components/ControlledWorkflow";
import { DownloadBand } from "components/DownloadBand";
import { Faq } from "components/Faq";
import { Features } from "components/Features";
import { Hero } from "components/Hero";
import { HowItWorks } from "components/HowItWorks";
import { Packs } from "components/Packs";
import { Promo } from "components/Promo";
import { Screens } from "components/Screens";
import { SiteFooter } from "components/SiteFooter";
import { SiteHeader } from "components/SiteHeader";
import { Support } from "components/Support";
import { Waitlist } from "components/Waitlist";
import { WhatsNew } from "components/WhatsNew";

export function HomePage() {
  return (
    <div className="page">
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

      <SiteFooter />
    </div>
  );
}
