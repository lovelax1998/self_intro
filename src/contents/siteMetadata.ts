export const siteMetadata = {
  siteUrl: 'https://us4ever.com',
  siteRepo: 'https://github.com/luotianyou/us4ever.com',
  siteLogo: '/images/logo.jpg',
  siteShortTitle: '一杯清露冷如冰',
  siteTitle: "luotianyou's coding journey",
  siteScreenshot: '',
  siteDescription:
    'Self-motivated and creative developer. With more than 3 years of work experience in the tech industry, I strive to create responsive and user-friendly websites and web applications. Fullstack capable, with a strong emphasis on Typescript. Also can write Golang, Java, Node.js and Python.',
  author: 'luotianyou',
  fullName: 'luotianyou',
  location: 'China',
  timeZone: 'China/Shanghai',
  locationIcon: '🇨🇳',
  // locationIcon: 'flag-china',
  position: 'Full Stack Web Developer',
  company: '',
  companySite: '',
  locale: 'en-US',
  image: '/images/logo.jpg',
  socialBanner: '/images/logo.jpg',
  profileCover: '',
  analytics: {
    // plausibleDataDomain: '',
    // simpleAnalytics: false, // true | false
    analyticsURL: '',
    umamiScriptSrc: '',
    umamiSiteId: '',
    // googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },

  postPageSize: 9,
};

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export const commentConfig = {
  enable: true,
  provider: 'giscus',
  // https://giscus.app/
  giscusConfig: {
    gitUsername: 'luotianyou',
    repo: 'us4ever.com', // process.env.GISCUS_REPO
    repositoryId: 'R_kgDOL4I1GQ', // process.env.GISCUS_REPOSITORY_ID
    category: 'Announcements', // process.env.GISCUS_CATEGORY
    categoryId: 'DIC_kwDOL4I1Gc4CfMMk', // process.env.GISCUS_CATEGORY_ID
    mapping: 'pathname',
    reactions: true,
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
    lang: 'en',
  },
};

export const socialAccounts = {
  x: '',
  instagram: '',
  email: '1353564917@qq.com',
  github: 'https://github.com/luotianyou',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
};

export const author = {
  name: 'luotianyou',
  location: 'China',
  timeZone: 'China/Shanghai',
  locationIcon: '🇨🇳',
  position: 'Full Stack Web Developer',
  calMeetingUrl: '',
  status: 'Working in ChongQing, China',
  workingOn: `I am learning and practicing the latest AI technology.`,
  workTogether: `I'm open for new opportunities, feel free to email me to see how can we collaborate.`,
  wakatime: '',
  github_accounts: [
    {
      username: 'luotianyou',
      token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
      endpoint: '/api/github?type=personal',
      type: 'personal',
      is_active: true,
    },
  ],
};

export const featureSwich = {
  // chatGPT
  ai: false,
  contactForm: true,
  meeting: false,
  guestbook: false,
  spotify: false,
  dashboard_wakatime: false,
  dashboard_github: true,
  topBanner: false,
};

export const docSearch = {
  apiKey: '', // search only key
  indexName: '',
  appId: '',
};
