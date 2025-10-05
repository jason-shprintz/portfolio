import { useState, type JSX } from "react";
import * as S from "./styles";
import { Button, Muted, SmallMuted } from "../../styles";

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
      // noop
    }
  }

  return (
    <S.ContactGrid>
      <S.ContactCard>
        <h3>Get in touch</h3>
        <Muted>I'm currently open to full-time and contract roles.</Muted>
        <S.ContactRow>
          <Button variant="primary" href={`mailto:${email}`}>
            Email me
          </Button>
          <Button
            as="button"
            onClick={() => void copyEmail()}
            aria-label="Copy email"
          >
            {copied ? "Copied!" : "Copy email"}
          </Button>
        </S.ContactRow>
        <S.ContactRow>
          <SmallMuted>
            Or connect on&nbsp;
            <a href="https://www.linkedin.com/in/jasonshprintz/">
              <img
                src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
                alt="LinkedIn"
              />
            </a>
            &nbsp;
            <a href="https://github.com/jason-shprintz">
              <img
                src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>
          </SmallMuted>
        </S.ContactRow>
      </S.ContactCard>
    </S.ContactGrid>
  );
}

export default Contact;
