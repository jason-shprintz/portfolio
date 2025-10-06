import { useState, type JSX } from "react";
import * as S from "./styles";
import { Button } from "../../styles";
import SectionWrapper from "../../shared/Components/SectionWrapper/SectionWrapper";

/**
 * Contact component displays contact information and options for reaching out.
 *
 * Features:
 * - Shows an email address with options to send an email or copy it to clipboard.
 * - Displays a message about availability for full-time and contract roles.
 * - Provides links to LinkedIn and GitHub profiles.
 *
 * State:
 * - `copied`: Indicates whether the email address has been copied to the clipboard.
 *
 * Usage:
 * ```tsx
 * <Contact />
 * ```
 *
 * @returns {JSX.Element} The rendered contact card UI.
 */
function Contact(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const email = "jshprintz@gmail.com";
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy email");
    }
  }

  return (
    <SectionWrapper id="contact" title="Contact">
      <S.ContactCard>
        <S.ContactRow>
          <Button variant="primary" href={`mailto:${email}`}>
            Email Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => void copyEmail()}
            aria-label="Copy Email"
          >
            {copied ? "Copied!" : "Copy Email"}
          </Button>
        </S.ContactRow>
      </S.ContactCard>
    </SectionWrapper>
  );
}

export default Contact;
