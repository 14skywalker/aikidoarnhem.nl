import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Proefles',
      links: [
        {
          text: 'Proefles',
          href: getPermalink('/#proefles'),
        },
        {
          text: 'Lestijden',
          href: getPermalink('/subs/lestijden'),
        },
        {
          text: 'Locaties',
          href: getPermalink('/subs/locaties'),
        },
        {
          text: 'Leraren',
          href: getPermalink('/subs/leraren'),
        },
      ],
    },
    {
      text: 'Aanmelden',
      links: [
        {
          text: 'Aanmelden',
          href: getPermalink('/aanmelden'),
        },
        {
          text: 'Lesgeld',
          href: getPermalink('/aanmelden#lesgeld'),
        },
        {
          text: 'Inschrijven',
          href: getPermalink('/landing/inschrijven'),
        },
        {
          text: 'Opzeggen',
          href: getPermalink('/landing/opzeggen'),
        },
      ],
    },
    {
      text: 'Ledeninfo',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Contact',
      href: '#',
    },
    {
      text: 'Links',
      href: '#',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Google groups', icon: 'tabler:brand-google', href: 'https://groups.google.com/g/aikidoarnhem' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `Stichting Sankaku - alle rechten voorbehouden`,
};
