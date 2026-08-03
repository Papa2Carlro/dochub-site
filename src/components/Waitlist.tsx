import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

/**
 * Optional waitlist via Formspree (no custom backend).
 * Set VITE_FORMSPREE_ID=xxxxxxxx at build time.
 */
export function Waitlist() {
  const formId = import.meta.env.VITE_FORMSPREE_ID?.trim();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  if (!formId) {
    return (
      <section
        className="band waitlist"
        id="waitlist"
        aria-labelledby="waitlist-title"
      >
        <h2 id="waitlist-title">Get notified</h2>
        <p>
          Releases ship on the download CDN. Follow the{" "}
          <a href="#download">Download</a> section when builds are live — or
          set <code>VITE_FORMSPREE_ID</code> to enable an email waitlist here.
        </p>
      </section>
    );
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source: "doc-hub-landing" }),
      });
      if (!res.ok) throw new Error("submit_failed");
      setStatus("ok");
      setMessage("You’re on the list — we’ll ping you when a build is ready.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Couldn’t submit right now. Try again in a moment.");
    }
  }

  return (
    <section
      className="band waitlist"
      id="waitlist"
      aria-labelledby="waitlist-title"
    >
      <h2 id="waitlist-title">Get notified</h2>
      <p>
        Builds are rolling out. Leave an email and we’ll tell you when Doc Hub
        is ready to download.
      </p>
      <form className="waitlist-form" onSubmit={(e) => void onSubmit(e)}>
        <label className="sr-only" htmlFor="waitlist-email">
          Email
        </label>
        <input
          id="waitlist-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={status === "loading" || status === "ok"}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading" || status === "ok"}
        >
          {status === "loading" ? "Sending…" : "Notify me"}
        </button>
      </form>
      {message ? (
        <p
          className={
            status === "error" ? "hint hint-error" : "hint hint-ok"
          }
          role="status"
        >
          {message}
        </p>
      ) : null}
    </section>
  );
}
