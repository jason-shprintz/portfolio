import { useState, type JSX } from "react";
import * as L from "./styles";
import { Button, Muted, SmallMuted } from "../../styles";

/** Contact section using styled-components */
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
    <L.ContactGrid>
      <L.ContactCard>
        <h3>Get in touch</h3>
        <Muted>
          I'm currently open to full-time and contract roles. Placeholder
          contact info below.
        </Muted>
        <L.ContactRow>
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
        </L.ContactRow>
        <L.ContactRow>
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
        </L.ContactRow>
      </L.ContactCard>

      <L.ContactForm onSubmit={(e) => e.preventDefault()}>
        <L.ContactLabel>
          Name
          <L.ContactInput placeholder="Your name" />
        </L.ContactLabel>
        <L.ContactLabel>
          Email
          <L.ContactInput placeholder="you@example.com" />
        </L.ContactLabel>
        <L.ContactLabel>
          Message
          <L.ContactTextarea placeholder="Quick message" />
        </L.ContactLabel>
        <div>
          <Button variant="primary" type="submit">
            Send (placeholder)
          </Button>
        </div>
      </L.ContactForm>
    </L.ContactGrid>
  );
}

export default Contact;
