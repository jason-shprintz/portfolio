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
    name: "Toastbyte.studio",
    description:
      "An independent software studio focused on building modern web and mobile applications. Architected and developed full-stack products leveraging React, TypeScript, and cutting-edge web technologies.",
    imgSrc: "assets/images/toastbyte.png",
    tech: ["React", "TypeScript", "Node", "Full-Stack"],
    link: "https://toastbyte.studio",
  },
  {
    id: "p2",
    name: "Alleyadmin.app",
    description:
      "A comprehensive admin management platform for bowling alley operations, streamlining scheduling, lane management, and customer tracking for operators.",
    imgSrc: "assets/images/alleyadmin.png",
    tech: ["React", "TypeScript", "Node", "Postgres"],
    link: "https://alleyadmin.app",
  },
  {
    id: "p3",
    name: "Dynastiestleague.com",
    description:
      "A dynasty fantasy sports league platform providing tools for league management, player tracking, trade analysis, and long-term roster building.",
    imgSrc: "assets/images/dynasties.png",
    tech: ["React", "TypeScript", "Node", "Sports Data API"],
    link: "https://dynastiestleague.com",
  },
];

export { projects };
