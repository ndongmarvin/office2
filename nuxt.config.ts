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
      title: 'OFIECS — Office d\'Inspection de l\'Éducation, des Services à l\'Enfance et des Compétences',
      meta: [
        { name: 'description', content: 'OFIECS : organisme national de régulation et de contrôle de l\'éducation, de la formation et des services à l\'enfance au Sénégal. Inspection des crèches, écoles maternelles, primaires et secondaires.' },
        // Open Graph
        { property: 'og:site_name', content: 'OFIECS' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'OFIECS — Inspection de l\'Éducation et Services à l\'Enfance' },
        { property: 'og:description', content: 'Organisme national de régulation et de contrôle de l\'éducation, de la formation et des services à l\'enfance au Sénégal.' },
        { property: 'og:image', content: '/og-image.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ofiecs' },
        { name: 'twitter:title', content: 'OFIECS — Inspection de l\'Éducation et Services à l\'Enfance' },
        { name: 'twitter:description', content: 'Organisme national de régulation et de contrôle de l\'éducation, de la formation et des services à l\'enfance au Sénégal.' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        // canonical (production should set SITE_URL env var)
        { rel: 'canonical', href: process.env.SITE_URL || process.env.API_BASE || 'http://localhost:3000' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'OFIECS',
            description: 'Office d\'Inspection de l\'Éducation, des Services à l\'Enfance et des Compétences',
            url: process.env.SITE_URL || process.env.API_BASE || 'http://localhost:3000',
            logo: (process.env.SITE_URL || process.env.API_BASE || 'http://localhost:3000') + '/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dakar',
              addressCountry: 'SN'
            },
            areaServed: 'SN',
            knowsAbout: ['Éducation', 'Inspection scolaire', 'Services à l\'enfance', 'Formation continue', 'Protection de l\'enfance'],
            foundingDate: '2025',
            slogan: 'Améliorer durablement la vie des enfants'
          })
        }
      ]
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