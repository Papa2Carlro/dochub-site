import { Analytics } from "./components/Analytics";
import { ControlledWorkflow } from "./components/ControlledWorkflow";
import { DownloadBand } from "./components/DownloadBand";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Packs } from "./components/Packs";
import { Promo } from "./components/Promo";
import { Screens } from "./components/Screens";
import { Support } from "./components/Support";
import { Waitlist } from "./components/Waitlist";
import { WhatsNew } from "./components/WhatsNew";

export function App() {
  return (
    <div className="page">
      <Analytics />
      <header className="top">
        <a className="brand" href="./">
          Doc Hub
        </a>
        <nav className="top-nav" aria-label="Primary">
          <a className="top-link" href="#how">
            How
          </a>
          <a className="top-link" href="#screens">
            Screens
          </a>
          <a className="top-link" href="#workflow">
            Workflow
          </a>
          <a className="top-link" href="#packs">
            Packs
          </a>
          <a className="top-link" href="#support">
            Support
          </a>
          <a className="top-link" href="#promo">
            Share
          </a>
          <a className="top-link" href="#faq">
            FAQ
          </a>
          <a className="top-link" href="#download">
            Download
          </a>
        </nav>
      </header>

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
        <span>Closed core · downloads counted on our CDN</span>
        <span className="foot-links">
          <a href="./privacy/">Privacy</a>
          <a href="./press/">Press</a>
          <a href="#support">Support</a>
          <a href="#waitlist">Notify</a>
          <a href="#download">Download</a>
        </span>
      </footer>
    </div>
  );
}
