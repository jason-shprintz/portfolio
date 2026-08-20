type SkillGroup = {
  label: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS', 'VBA'],
  },
  {
    label: 'Web & UI',
    items: [
      'React',
      'Next.js (App Router)',
      'Astro',
      'Redux',
      'MobX',
      'styled-components',
      'Tailwind CSS',
      'Pixi.js',
      'SVG generation',
    ],
  },
  {
    label: 'Mobile',
    items: [
      'React Native',
      'React Navigation',
      'iOS & Android native builds',
      'MapLibre',
      'Device sensors & geolocation',
      'Offline-first local storage',
    ],
  },
  {
    label: 'Cloud & infrastructure',
    items: [
      'Cloudflare Workers',
      'Cloudflare D1',
      'Cloudflare Pages',
      'Wrangler',
      'OpenNext',
      'Docker',
      'GitHub Actions',
      'Scheduled / cron workloads',
    ],
  },
  {
    label: 'Backend & APIs',
    items: [
      'Node.js',
      'REST',
      'GraphQL',
      'gRPC',
      'OAuth 2.0 & PKCE',
      'Session & cookie security',
      'Web Crypto (AES-GCM)',
      'Zod',
      'Caching & request deduplication',
    ],
  },
  {
    label: 'Data',
    items: [
      'Postgres',
      'SQLite',
      'MongoDB',
      'Schema design & migrations',
      'JSON',
      'XML',
      'YAML',
    ],
  },
  {
    label: 'AI integrations',
    items: [
      'Anthropic API',
      'Model Context Protocol (MCP) servers',
      'LLM prompt & structured-output design',
      'Claude Code',
    ],
  },
  {
    label: 'Testing & quality',
    items: [
      'Vitest',
      'Jest',
      'Testing Library',
      'Playwright',
      'Selenium',
      'Storybook',
      'ESLint',
      'Prettier',
      'Static type checking',
      'Coverage reporting',
    ],
  },
  {
    label: 'Build & delivery',
    items: [
      'Vite',
      'Metro',
      'Babel',
      'npm',
      'Yarn',
      'npm workspaces / monorepos',
      'Semantic versioning',
      'Release automation',
      'CI/CD pipelines',
    ],
  },
  {
    label: 'Practice',
    items: [
      'Architecture & technical documentation',
      'SEO & structured metadata',
      'Web analytics (GA4, Cloudflare)',
      'Figma',
      'Confluence',
    ],
  },
];

export { skillGroups };
