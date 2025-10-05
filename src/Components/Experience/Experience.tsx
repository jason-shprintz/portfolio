import type { JSX } from "react";
import * as L from "./styles";
import { Muted } from "../../styles";

function Experience(): JSX.Element {
  return (
    <L.ExperienceList>
      <L.ExpItem>
        <L.ExpLeft>
          <strong>Acme Co.</strong>
          <Muted>Senior Engineer · 2021 — Present</Muted>
        </L.ExpLeft>
        <L.ExpRight>
          Led a team building internal tools and customer-facing web apps.
          Improved performance and cut deployment times by 40%.
        </L.ExpRight>
      </L.ExpItem>

      <L.ExpItem>
        <L.ExpLeft>
          <strong>Widget Labs</strong>
          <Muted>Software Engineer · 2018 — 2021</Muted>
        </L.ExpLeft>
        <L.ExpRight>
          Built scalable APIs and integrations used by 100k+ end users.
        </L.ExpRight>
      </L.ExpItem>
    </L.ExperienceList>
  );
}

export default Experience;
