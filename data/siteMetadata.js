const siteMetadata = {
  title: 'Blog | Maxime NOEL',
  author: 'Maxime NOEL',
  headerTitle: 'Mon grain de sable',
  description: 'mon jardin numérique où tu découvriras les idées et les choses qui me passionnent',
  snippets: 'Quelques snippets collecté par Maxime',
  language: 'fr-fr',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://machina-dev.com',
  siteRepo: 'https://github.com/MachinaDev/machina-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@machina-dev.com',
  github: 'https://github.com/MachinaDev',
  twitter: 'https://twitter.com/Machina_Dev',
  linkedin: 'https://www.linkedin.com/in/maxime-noel-machina/',
  website: 'https://machina-dev.com',
  locale: 'fr-fr',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'https://twitter.com/Machina_Dev',
  },
}

module.exports = siteMetadata
