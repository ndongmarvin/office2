import { defineNuxtConfig } from "nuxt/config";

// @ts-ignore - some custom keys are intentionally present and
// may not be included in the typed InputConfig used by the
// project's TypeScript settings. Silence the type-check here.
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  // Configuration du serveur
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
      // canonical site URL (set SITE_URL in production env)
      siteUrl: process.env.SITE_URL || process.env.API_BASE || 'http://localhost:3000',
      port: 3001
    }
  },

  // Modules Nuxt
  modules: [
    '@nuxtjs/tailwindcss',

  ],

  // Configuration de TypeScript
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false
  },

  // Configuration des styles
  // Use non-aliased paths so Vite/Vitest can resolve the files reliably
  css: [
    'assets/css/tailwind.css',
    'assets/css/main.css',
  ],

 

  // Configuration des routes
  routeRules: {
    '/unauthorized': { ssr: true },
  },

  // Configuration de l'application
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Système de Gestion de Transport',
      meta: [
        // Open Graph
        { property: 'og:site_name', content: 'Little Learners' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Little Learners — Crèche d\'Excellence' },
        { property: 'og:description', content: 'Crèche agréée OFIECS — éducation d\'excellence pour les 6 mois à 5 ans.' },
        { property: 'og:image', content: '/og-image.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@littlelearners' },
        { name: 'twitter:title', content: 'Little Learners — Crèche d\'Excellence' },
        { name: 'twitter:description', content: 'Crèche agréée OFIECS — éducation d\'excellence pour les 6 mois à 5 ans.' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        // canonical (production should set SITE_URL env var)
        { rel: 'canonical', href: process.env.SITE_URL || process.env.API_BASE || 'http://localhost:3000' }
      ],
      
    }
  },


  // Configuration de Tailwind
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: false
  },

  compatibilityDate: '2023-07-15',

})