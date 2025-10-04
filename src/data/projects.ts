type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    name: "Project Atlas",
    description:
      "A full-stack platform for managing developer portfolios, with fast search and deploy workflows.",
    tech: ["TypeScript", "React", "Node", "Postgres"],
    link: "#",
  },
  {
    id: "p2",
    name: "Realtime Chat",
    description:
      "Scalable WebSocket chat with presence, rooms and moderation tools.",
    tech: ["React", "WebSocket", "Redis"],
    link: "#",
  },
  {
    id: "p3",
    name: "Design System",
    description:
      "A component library and token system used across multiple products.",
    tech: ["React", "Storybook", "CSS Modules"],
    link: "#",
  },
];

export { projects };
