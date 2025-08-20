// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/sanity", "@nuxt/fonts", "nuxt-auth-utils"],
  /*session: {
    //name: 'nuxt-session',
    //password: process.env.SESSION_PASSWORD || 'wdjt003',
    storageOptions: {
      driver: 'memory' // or 'redis', 'fs', etc.
    }
  },*/
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID || "e48tsdac",
    dataset: process.env.NUXT_SANITY_DATASET || "production",
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2025-04-01",
    token: process.env.NUXT_SANITY_API_READ_TOKEN, // Only required when using a private dataset

  },
  runtimeConfig: {
    protectedPassword: process.env.PROTECTED_PASSWORD || 'press',
    authSecret: process.env.SESSION_PASSWORD || 'wdjt003',
    public: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL,

    },



  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["shallowequal", "lodash/startCase.js"],
    },
  },
});
