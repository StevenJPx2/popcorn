// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enable: true },
  modules: [
    "@nuxtjs/seo",
    "@nuxt/icon",
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
