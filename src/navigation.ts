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
          href: getPermalink('/p/lestijden'),
        },
        {
          text: 'Locaties',
          href: getPermalink('/p/locaties'),
        },
        {
          text: 'Leraren',
          href: getPermalink('/p/leraren'),
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
    // {
    //   text: 'Blogs',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'Ledeninfo',
      links: [
        {
          text: 'Ledennieuws',
          href: getPermalink('/p/ledennieuws'),
        },
        {
          text: 'Kalender',
          href: getPermalink('/p/kalender'),
        },
        {
          text: 'Kalender full screen',
          href: "https://www.google.com/calendar/embed?showTitle=0&hl=nl&height=600&wkst=2&bgcolor=%23FFFFFF&src=aikidoarnhem%40gmail.com&color=%232952A3&src=arn6ku55bk2ruab49tqtioeb6s%40group.calendar.google.com&color=%23125A12&ctz=Europe%2FAmsterdam"
        },
        {
          text: 'Discussiegroep',
          href: 'https://groups.google.com/g/aikidoarnhem',
        },
        {
          text: 'Kyu en Dangraad eisen',
          href: getPermalink('/p/vereisten'),
        },
        {
          text: 'Leraren',
          href: getPermalink('/p/leraren'),
        },
        {
          text: 'Lesgeld',
          href: getPermalink('/aanmelden#lesgeld'),
        },
        {
          text: 'Lestijden',
          href: getPermalink('/p/lestijden'),
        },
        {
          text: 'Locaties',
          href: getPermalink('/p/locaties'),
        },
        {
          text: 'Wijzigingsformulier',
          href: getPermalink('/landing/inschrijven'),
        },
        {
          text: 'Opzegformulier',
          href: getPermalink('/landing/opzeggen'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
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
    {}, {}, {
      links: [
        { text: 'Samenvatting', href: '/samenvatting'},
        { text: 'Summary', href: '/summary'},
      ]
    },
    {
      title: 'Stichting',
      links: [
        { text: 'Missie', href: '/missie' },
        { text: 'AVG', href: '/privacy' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Missie', href: getPermalink('/missie') },
    { text: 'AVG Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Google groups', icon: 'tabler:brand-google', href: 'https://groups.google.com/g/aikidoarnhem' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `Stichting Sankaku - alle rechten voorbehouden`,
};
