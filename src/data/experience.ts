type Experience = {
  imgSrc: string;
  name: string;
  title: string;
  time: string;
  description: string[];
};

const experience: Experience[] = [
  {
    imgSrc: "assets/images/caesars.jpg",
    name: "Caesars Sportsbook",
    title: "Software Engineer",
    time: "Dec 2025 - Present",
    description: [
      "Developed and maintained features for the Caesars Sportsbook platform using React and TypeScript",
      "Collaborated with cross-functional teams to deliver high-quality user experiences for sports betting",
      "Increased SEO in the national Sportsbook app and marketing landing page by introducing more targeted metadata descriptions, titles, and HTML elements",
    ],
  },
  {
    imgSrc: "assets/images/toastbyte.png",
    name: "Toastbyte Studios",
    title: "Founder",
    time: "Nov 2025 - Present",
    description: [
      "Founded an independent software studio focused on building web and mobile applications.",
      "Architected and developed full-stack projects leveraging React, TypeScript, and modern web technologies",
    ],
  },
  {
    imgSrc: "assets/images/sands.jpg",
    name: "Sands Digital Services",
    title: "Client Engineer",
    time: "Dec 2022 - Dec 2025",
    description: [
      "Leveraged technologies such as React, TypeScript, MobX state management, and gRPC to build internal tools",
      "Created clean, reusable React components for various applications, improving code efficiency",
      "Collaborated with cross-functional teams to ensure tools met user needs and expectations",
    ],
  },
  {
    imgSrc: "assets/images/alphaSights.jpg",
    name: "AlphaSights",
    title: "Software Developer / Quality Assurance",
    time: "Oct 2020 - Dec 2022",
    description: [
      "Developed a VBA-based macro to standardize and expedite processes across the organization",
      "Created a program to streamline the onboarding process for new employees, enhancing efficiency",
    ],
  },
  {
    imgSrc: "assets/images/litService.jpg",
    name: "Litigation Services",
    title: "Quality Assurance Specialist",
    time: "Jun 2016 - Sep 2020",
    description: [
      "Implemented a documentation system into our Standard Operating Procedures (SOP), enhancing visibility on employee performance",
      "Catalogued the repository and linked it to an online spreadsheet to effectively illustrate workload challenges",
    ],
  },
];

export { experience };
