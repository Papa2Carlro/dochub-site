/**
 * Promo strip — share CTA + press kit. Copy lives on /press/ for full drafts.
 */
export function Promo() {
  return (
    <section className="band promo" id="promo" aria-labelledby="promo-title">
      <h2 id="promo-title">Share it</h2>
      <p>
        Local-first docs &amp; planning — free baseline, no cloud required. Grab
        the Board shot or OG image and post.
      </p>
      <div className="promo-actions">
        <a className="btn btn-primary" href="./press/">
          Open press kit
        </a>
        <a className="btn btn-ghost" href="./screens/portfolio-task-board.png" download>
          Download Board shot
        </a>
        <a className="btn btn-ghost" href="./og.png" download>
          Download OG
        </a>
      </div>
      <pre className="promo-blurb" tabIndex={0}>
        {`Doc Hub — local-first launcher for docs & planning.
Free baseline, no cloud required.
https://dochub-site.pages.dev`}
      </pre>
    </section>
  );
}
