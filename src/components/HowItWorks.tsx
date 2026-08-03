const STEPS = [
  {
    n: "1",
    title: "Download",
    body: "Grab the macOS, Windows, or Linux build. No account required.",
  },
  {
    n: "2",
    title: "Point at a workspace",
    body: "Pick any folder with Docs/ — Doc Hub indexes it locally on your machine.",
  },
  {
    n: "3",
    title: "Plan and ship",
    body: "Use the board, docs browser, and Trophy Room. Everything stays offline-first.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      className="band how"
      id="how"
      aria-labelledby="how-title"
    >
      <h2 id="how-title">How it works</h2>
      <p>Three steps from empty desk to a live local launcher.</p>
      <ol className="how-list">
        {STEPS.map((step) => (
          <li key={step.n}>
            <span className="how-n" aria-hidden="true">
              {step.n}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
