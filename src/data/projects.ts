type Project = {
  id: string;
  name: string;
  status: string;
  domain: string;
  description: string;
  imgSrc: string;
  tech: string[];
  link: string;
  imageVariant?: 'gitall';
};

const projects: Project[] = [
  {
    id: 'p1',
    name: 'GitAll',
    status: 'Live',
    domain: 'gitall.app',
    description:
      'A unified contribution heatmap viewer that aggregates activity from GitHub, GitLab, Bitbucket, and Gitea/Forgejo into a single side-by-side or merged view. Implements OAuth 2.0 with PKCE across four providers without a library, with AES-GCM encrypted session cookies, and serves embeddable SVG heatmaps for READMEs.',
    imgSrc: 'assets/images/gitall.svg',
    imageVariant: 'gitall',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Cloudflare Workers',
      'D1',
      'OAuth 2.0',
      'Vitest',
    ],
    link: 'https://gitall.app',
  },
  {
    id: 'p2',
    name: 'Alley Admin',
    status: 'Coming soon',
    domain: 'alleyadmin.app',
    description:
      'Web-based bowling league management replacing the aging desktop software league secretaries rely on. Rosters, digital scorekeeping, USBC-compliant handicap calculation, standings, scheduling, and tournament brackets in one browser app. Currently live as a marketing and waitlist site backed by a Cloudflare Worker and D1.',
    imgSrc: 'assets/images/alleyadmin.svg',
    tech: [
      'Astro',
      'TypeScript',
      'Cloudflare Workers',
      'D1',
      'Cloudflare Pages',
    ],
    link: 'https://alleyadmin.app',
  },
  {
    id: 'p3',
    name: 'Dynastiest League',
    status: 'Live',
    domain: 'dynastiestleague.com',
    description:
      'A dynasty fantasy football league platform with an AI trade analyzer at its core: a scheduled Cloudflare Worker polls the Sleeper API every five minutes, generates grades and commentary for new trades via the Anthropic API, and caches them in D1 keyed on transaction ID so every visitor sees one consistent analysis.',
    imgSrc: 'assets/images/dynastiest.webp',
    tech: [
      'React',
      'TypeScript',
      'MobX',
      'Vite',
      'Cloudflare Workers',
      'D1',
      'Anthropic API',
    ],
    link: 'https://dynastiestleague.com',
  },
  {
    id: 'p4',
    name: 'Toastbyte Studios',
    status: 'Studio',
    domain: 'toastbyte.studio',
    description:
      'An independent software studio building web and mobile products end to end — from React Native apps to Cloudflare-hosted web platforms and Model Context Protocol services.',
    imgSrc: 'assets/images/toastbyte-logo.webp',
    tech: ['React', 'TypeScript', 'Vite', 'styled-components'],
    link: 'https://toastbyte.studio',
  },
];

export { projects };
