// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enable: true },
  extends: ["nuxt-seo-kit"],
  modules: [
    "@nuxtjs/critters",
    "nuxt-icon",
    "@vite-pwa/nuxt",
    "@nuxtjs/html-validator",
    "@vueuse/nuxt",
    "nuxt-delay-hydration",
    "@fdcn/nugget",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
});
