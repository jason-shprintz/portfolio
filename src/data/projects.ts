type Project = {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    name: "Toastbyte Studio",
    description:
      "An independent software studio focused on building modern web and mobile applications. Architected and developed full-stack products leveraging React, TypeScript, and cutting-edge web technologies.",
    imgSrc: "assets/images/toastbyte.png",
    tech: ["React", "TypeScript", "Node", "Full-Stack"],
    link: "https://toastbyte.studio",
  },
  {
    id: "p2",
    name: "GitAll",
    description:
      "A unified contribution heatmap viewer that aggregates activity from GitHub, GitLab, Bitbucket, and Gitea/Forgejo into a single side-by-side or merged view, with per-platform stats and optional OAuth for private contribution data.",
    imgSrc: "assets/images/gitall.svg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://gitall.app",
  },
  {
    id: "p3",
    name: "Dynastiest League",
    description:
      "A dynasty fantasy sports league platform providing tools for league management, player tracking, trade analysis, and long-term roster building.",
    imgSrc: "assets/images/dynastiest.png",
    tech: ["React", "TypeScript", "Node", "Sports Data API"],
    link: "https://dynastiestleague.com",
  },
];

export { projects };
