import { useState, type JSX } from "react";

/**
 * Renders the contact section of the portfolio, including contact information,
 * email copy functionality, and a placeholder contact form.
 *
 * Features:
 * - Displays a contact card with an email address and buttons to email or copy the address.
 * - Shows a temporary "Copied!" message when the email is copied to the clipboard.
 * - Provides links to LinkedIn and GitHub (currently placeholders).
 * - Includes a simple contact form with fields for name, email, and message.
 *   The form submission is currently disabled and acts as a placeholder.
 *
 * @returns {JSX.Element} The contact section UI.
 */
function Contact(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const email = "jason@example.com";
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // noop (clipboard may be unavailable)
    }
  }

  return (
    <div className="contact-grid">
      <div className="contact-card">
        <h3>Get in touch</h3>
        <p className="muted">
          I'm currently open to full-time and contract roles. Placeholder
          contact info below.
        </p>
        <div className="contact-row">
          <a className="button primary" href={`mailto:${email}`}>
            Email me
          </a>
          <button
            className="button"
            onClick={() => {
              void copyEmail();
            }}
            aria-label="Copy email"
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
        <p className="small muted">
          Or connect on <a href="#">LinkedIn</a> · <a href="#">GitHub</a>
        </p>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input placeholder="Your name" />
        </label>
        <label>
          Email
          <input placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea placeholder="Quick message" />
        </label>
        <div className="form-actions">
          <button className="button primary" type="submit">
            Send (placeholder)
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
