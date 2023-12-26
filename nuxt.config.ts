// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/critters",
    "nuxt-icon",
    "nuxt-purgecss",
    "@vite-pwa/nuxt",
    "@nuxtjs/html-validator",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
    "nuxt-delay-hydration",
    "@fdcn/nugget",
  ],
});
