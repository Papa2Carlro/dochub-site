import { FormEvent, useState, type FC } from "react";
import classNames from "classnames/bind";
import { useI18n } from "i18n";
import {
  EARLY_LICENSE_UNTIL_LABEL,
  FEEDBACK_EMAIL,
  earlyLicenseOpen,
  licenseMailto,
} from "lib/contact";
import scss from "./Waitlist.module.scss";

const cn = classNames.bind(scss);

type Status = "idle" | "loading" | "ok" | "error";

/**
 * Optional waitlist via Formspree (no custom backend).
 * Set VITE_FORMSPREE_ID=xxxxxxxx at build time.
 */
const Waitlist: FC = () => {
  const { t } = useI18n();
  const formId = import.meta.env.VITE_FORMSPREE_ID?.trim();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  if (!formId) {
    return (
      <section className={`band ${cn("Waitlist")}`} id="waitlist" aria-labelledby="waitlist-title">
        <h2 id="waitlist-title">{t("waitlist", "title")}</h2>
        <p>
          {t("waitlist", "ledeNoFormBefore")}{" "}
          <a href="#download">{t("waitlist", "downloadLink")}</a> {t("waitlist", "ledeNoFormAfter")}
          {earlyLicenseOpen() ? (
            <>
              {" "}
              {t("waitlist", "earlyLicense", {
                date: EARLY_LICENSE_UNTIL_LABEL,
                email: FEEDBACK_EMAIL,
              })
                .split(FEEDBACK_EMAIL)
                .map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <a href={licenseMailto()}>{FEEDBACK_EMAIL}</a>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
            </>
          ) : null}
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
      setMessage(t("waitlist", "success"));
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(t("waitlist", "error"));
    }
  }

  return (
    <section className={`band ${cn("Waitlist")}`} id="waitlist" aria-labelledby="waitlist-title">
      <h2 id="waitlist-title">{t("waitlist", "title")}</h2>
      <p>{t("waitlist", "ledeWithForm")}</p>
      <form className={cn("Waitlist__form")} onSubmit={(e) => void onSubmit(e)}>
        <label className="sr-only" htmlFor="waitlist-email">
          {t("waitlist", "emailLabel")}
        </label>
        <input
          id="waitlist-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={t("waitlist", "emailPlaceholder")}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={status === "loading" || status === "ok"}
        />
        <button type="submit" className="btn btn-primary" disabled={status === "loading" || status === "ok"}>
          {status === "loading" ? t("waitlist", "submitting") : t("waitlist", "submit")}
        </button>
      </form>
      {message ? (
        <p className={status === "error" ? "hint hint-error" : "hint hint-ok"} role="status">
          {message}
        </p>
      ) : null}
    </section>
  );
};

export { Waitlist };
