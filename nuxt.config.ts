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
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Système de Gestion de Transport',
      meta: [
        { name: 'description', content: 'Application de gestion de transport pour les agences de voyage' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
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