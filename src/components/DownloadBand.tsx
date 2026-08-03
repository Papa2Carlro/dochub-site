import { DownloadCtas } from "./DownloadCtas";

/** Second CTA band — SEO + conversion after feature story. */
export function DownloadBand() {
  return (
    <section className="band download-band" id="download" aria-labelledby="download-title">
      <h2 id="download-title">Get Doc Hub</h2>
      <p>
        Free baseline forever. Pick your OS — installers ship from our public
        releases channel.
      </p>
      <DownloadCtas />
    </section>
  );
}
