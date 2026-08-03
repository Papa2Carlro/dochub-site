import { DownloadCtas } from "./DownloadCtas";
import { ProductStage } from "./ProductStage";

export function Hero() {
  return (
    <section className="hero">
      <ProductStage />
      <div className="hero-copy">
        <p className="brand-mark">Doc Hub</p>
        <h1>Your repos. Your docs. One local launcher.</h1>
        <p className="lede">
          Offline-first planning, docs, and extensions for solo builders — free
          on the baseline, no cloud required.
        </p>
        <DownloadCtas />
      </div>
    </section>
  );
}
