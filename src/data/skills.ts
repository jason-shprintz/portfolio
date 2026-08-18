type SkillGroup = {
  label: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Redux", "MobX", "styled-components", "Pixi.js"],
  },
  {
    label: "Testing & quality",
    items: ["Playwright", "Selenium", "Storybook"],
  },
  {
    label: "Data & services",
    items: ["Node.js", "Postgres", "MongoDB", "gRPC", "JSON", "XML", "YAML"],
  },
  {
    label: "Tooling",
    items: ["Vite", "npm", "Yarn", "Figma", "Confluence"],
  },
];

export { skillGroups };
