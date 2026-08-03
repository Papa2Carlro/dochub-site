const STEPS = [
  {
    title: "Task",
    body: "Defined intent and scope",
  },
  {
    title: "Relevant context",
    body: "Docs, decisions, and task links",
  },
  {
    title: "Scoped agent work",
    body: "Work stays inside clear boundaries",
  },
  {
    title: "Review & checks",
    body: "Impact, tests, and audit",
  },
  {
    title: "Safe delivery",
    body: "Human-verified outcome",
  },
] as const;

const VALUES = [
  {
    title: "Relevant, not exhaustive context",
    body: "Task-specific documentation sessions and linked project knowledge keep the working set focused.",
  },
  {
    title: "Risk made visible",
    body: "Scoped code-health signals, impact analysis, and quarantine fences help expose fragile areas before a change expands.",
  },
  {
    title: "Handoffs that retain context",
    body: "Work Capsules preserve a session pack and a stop note, then check freshness before work resumes.",
  },
  {
    title: "Verification stays human",
    body: "Post-work audit prompts surface architecture risks, missing tests, documentation drift, and items that should not ship.",
  },
] as const;

export function ControlledWorkflow() {
  return (
    <section
      className="band workflow"
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <p className="workflow-eyebrow">CONTROLLED AI-ASSISTED WORK</p>
      <h2 id="workflow-title">
        Give agents context. Keep delivery accountable.
      </h2>
      <p>
        Doc Hub helps turn AI-assisted work into a controlled engineering loop:
        relevant context first, explicit scope during implementation, and human
        verification before delivery.
      </p>

      <ol className="workflow-flow">
        {STEPS.map((step, i) => (
          <li key={step.title}>
            <span className="workflow-step-n" aria-hidden="true">
              {i + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>

      <ul className="workflow-values">
        {VALUES.map((value) => (
          <li key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </li>
        ))}
      </ul>

      <p className="workflow-close">
        AI is an accelerator inside a disciplined engineering process — not a
        substitute for engineering judgment.
      </p>
    </section>
  );
}
