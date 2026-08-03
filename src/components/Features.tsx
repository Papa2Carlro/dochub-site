const FEATURES = [
  {
    title: "Local workspaces",
    body: "Point Doc Hub at any repo. Docs, planning, and tools stay on your machine.",
  },
  {
    title: "Planning board",
    body: "Tasks, milestones, and trail — free forever on the baseline, offline-ready.",
  },
  {
    title: "Extensions without lock-in",
    body: "Language adapters and private plugins sit on open contracts. The core stays yours.",
  },
] as const;

export function Features() {
  return (
    <section className="band features" id="features" aria-labelledby="features-title">
      <h2 id="features-title">What you get</h2>
      <ul className="feature-list">
        {FEATURES.map((f) => (
          <li key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
