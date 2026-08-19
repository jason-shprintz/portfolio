import { useState, useRef, useEffect, type JSX } from "react";
import { LINKS } from "../../constants";

function ContactInteractive(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const email = LINKS.email.replace("mailto:", "");

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard write failed
    }
  }

  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => {
        void copyEmail();
      }}
      aria-label="Copy email address"
    >
      {copied ? "Copied" : "Copy address"}
    </button>
  );
}

export default ContactInteractive;
