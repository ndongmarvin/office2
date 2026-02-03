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
        { property: 'og:image', content: '/logo.png' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '60' },
        { property: 'og:image:alt', content: 'Logo OFIECS' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ofiecs' },
        { name: 'twitter:title', content: 'OFIECS — Inspection de l\'Éducation et Services à l\'Enfance' },
        { name: 'twitter:description', content: 'Organisme national de régulation et de contrôle de l\'éducation, de la formation et des services à l\'enfance au Sénégal.' },
        { name: 'twitter:image', content: '/img/logo-ofiecs.svg' },
        // MS Tile
        { name: 'msapplication-TileColor', content: '#1e3a8a' },
        { name: 'msapplication-TileImage', content: '/img/ms-icon-144x144.png' },
        { name: 'msapplication-config', content: '/img/browserconfig.xml' },
        // Theme
        { name: 'theme-color', content: '#1e3a8a' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon-96x96.png' },
        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-icon-180x180.png' },
        // Android Icons
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/android-icon-192x192.png' },
        // Manifest
        { rel: 'manifest', href: '/img/manifest.json' },
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
            logo: '/logo.png',
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