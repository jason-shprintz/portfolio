import { useState, type JSX } from "react";
import styles from "./Contact.module.css";
import { LINKS } from "../../constants";

/**
 * Contact interactive component — handles clipboard copy and provides contact CTA buttons.
 *
 * @returns {JSX.Element} The rendered contact card UI.
 */
function ContactInteractive(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const email = LINKS.email.replace("mailto:", "");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard write failed
    }
  }

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactRow}>
        <button
          className={`${styles.button} ${styles.buttonPrimary}`}
          type="button"
          onClick={() => { window.location.href = `mailto:${email}`; }}
        >
          Email Me
        </button>
        <button
          className={`${styles.button} ${styles.buttonGhost}`}
          type="button"
          onClick={() => {
            void copyEmail();
          }}
          aria-label="Copy email address"
        >
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
    </div>
  );
}

export default ContactInteractive;
