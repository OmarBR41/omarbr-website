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
      'mui',
      'postgresql',
      // 'docker'
      // 'digitalocean'
    ],
    // url: 'https://shop.wobs.gg',
    isInDevelopment: true,
  },
  {
    id: 'david-camporredondo',
    stack: [
      'react',
      'nextjs',
      'tailwindcss',
      'javascript',
      'typescript',
      'html5',
      // 'netlify'
    ],
    url: 'https://davidcamporredondo.com',
  },
  {
    id: 'omarbr',
    stack: [
      'react',
      'nextjs',
      'css3',
      'javascript',
      'typescript',
      'html5',
      // 'digitalocean'
    ],
    url: 'https://omarbr.com',
    // repoUrl: 'https://github.com/OmarBR41/omarbr',
  },
  {
    id: 'auth-passport-jwt',
    stack: [
      'react',
      'tailwindcss',
      'redux',
      'javascript',
      'nodejs',
      'expressjs',
      'graphql',
      'mongodb',
      // 'netlify'
    ],
    url: 'https://auth-passport-jwt.netlify.app',
    repoUrl: 'https://github.com/OmarBR41/auth-passport-jwt',
  },
  {
    id: 'ip-address-tracker',
    stack: [
      'react',
      'html5',
      'css3',
      'javascript',
      // 'netlify'
    ],
    url: 'https://ip-address-tracker-obr.netlify.app',
    repoUrl: 'https://github.com/OmarBR41/ip-address-tracker',
  },
];
