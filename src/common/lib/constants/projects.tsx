import { type Badge } from '@/common/components/projects/StackBadges';

export type Project = {
  id: string;
  stack: Badge[];
  url?: string;
  repoUrl?: string;
  isInDevelopment?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'wobsgg',
    stack: [
      'react',
      'nextjs',
      'graphql',
      'javascript',
      'typescript',
      'html5',
      'tailwindcss',
      'postgresql',
      'docker',
      'digital-ocean',
    ],
    // url: 'https://shop.wobs.gg',
    isInDevelopment: true,
  },
  {
    id: 'david-camporredondo',
    stack: ['react', 'nextjs', 'javascript', 'typescript', 'html5', 'tailwindcss'],
    url: 'https://davidcamporredondo.com',
  },
  {
    id: 'omarbr',
    stack: ['react', 'nextjs', 'javascript', 'typescript', 'html5', 'css3'],
    url: 'https://omarbr.com',
    repoUrl: 'https://github.com/OmarBR41/omarbr-website',
  },
  {
    id: 'auth-passport-jwt',
    stack: ['react', 'redux', 'javascript', 'nodejs', 'expressjs', 'graphql', 'mongodb', 'tailwindcss'],
    url: 'https://auth-passport-jwt.netlify.app',
    repoUrl: 'https://github.com/OmarBR41/auth-passport-jwt',
  },
  {
    id: 'ip-address-tracker',
    stack: ['react', 'javascript', 'html5', 'css3'],
    url: 'https://ip-address-tracker-obr.netlify.app',
    repoUrl: 'https://github.com/OmarBR41/ip-address-tracker',
  },
  {
    id: 'github-commit-activity-explorer',
    stack: ['react', 'javascript', 'html5', 'css3'],
    url: 'https://gh-commit-activity-explorer.netlify.app',
    repoUrl: 'https://github.com/OmarBR41/github-commit-activity-explorer',
  },
];
