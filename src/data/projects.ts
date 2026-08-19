type Project = {
  id: string;
  name: string;
  status: string;
  domain: string;
  description: string;
  imgSrc: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: "p1",
    name: "GitAll",
    status: "Live",
    domain: "gitall.app",
    description:
      "A unified contribution heatmap viewer that aggregates activity from GitHub, GitLab, Bitbucket, and Gitea/Forgejo into a single side-by-side or merged view, with per-platform stats and optional OAuth for private contribution data.",
    imgSrc: "assets/images/gitall.svg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://gitall.app",
  },
  {
    id: "p2",
    name: "Dynastiest League",
    status: "Live",
    domain: "dynastiestleague.com",
    description:
      "A dynasty fantasy sports league platform providing tools for league management, player tracking, trade analysis, and long-term roster building.",
    imgSrc: "assets/images/dynastiest.png",
    tech: ["React", "TypeScript", "Node", "Sports Data API"],
    link: "https://dynastiestleague.com",
  },
  {
    id: "p3",
    name: "Toastbyte Studios",
    status: "Studio",
    domain: "toastbyte.studio",
    description:
      "An independent software studio focused on building modern web and mobile applications. Architected and developed full-stack products leveraging React, TypeScript, and cutting-edge web technologies.",
    imgSrc: "assets/images/toastbyte-logo.jpg",
    tech: ["React", "TypeScript", "Node", "Full-Stack"],
    link: "https://toastbyte.studio",
  },
];

export { projects };
