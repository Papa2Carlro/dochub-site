export function Packs() {
  return (
    <section className="band packs" id="packs" aria-labelledby="packs-title">
      <p className="packs-eyebrow">Paid pack · $15 one-time</p>
      <h2 id="packs-title">Visual Ship Gate</h2>
      <p>
        For solo builders shipping <strong>browser UI</strong> (React, Vue,
        static, admin — TypeScript optional): capture desktop and mobile shots
        of your routes, diff against baselines, attach evidence to a Doc Hub
        task — or fail CI. Not an API/Node pack. Free launcher stays free.
      </p>
      <figure className="packs-demo">
        <picture>
          <source
            media="(prefers-reduced-motion: reduce)"
            srcSet="./screens/visual-ship-still.jpg"
          />
          <img
            className="packs-gif"
            src="./screens/visual-ship.gif"
            width={880}
            height={520}
            alt="Visual Ship Gate cycling through captured route screenshots"
          />
        </picture>
        <figcaption>
          Dogfood on this site — home → press → privacy, desktop viewport.
        </figcaption>
      </figure>
      <p className="packs-cta-row">
        <a className="btn btn-primary" href="#waitlist">
          Notify me when it ships
        </a>
        <span className="packs-price">$15 · local CLI · web UI routes</span>
      </p>
    </section>
  );
}
