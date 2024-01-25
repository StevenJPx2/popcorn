// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  modules: [
    "@nuxtjs/critters",
    "nuxt-icon",
    "@vite-pwa/nuxt",
    "@nuxtjs/html-validator",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
    "nuxt-delay-hydration",
    "@fdcn/nugget",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
});
