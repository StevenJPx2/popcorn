import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["critters"]?: typeof import("@nuxtjs/critters").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["purgecss"]?: typeof import("nuxt-purgecss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pwa"]?: typeof import("@vite-pwa/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["htmlValidator"]?: typeof import("@nuxtjs/html-validator").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["fontMetrics"]?: typeof import("@nuxtjs/fontaine").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["delayHydration"]?: typeof import("nuxt-delay-hydration").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["splitType"]?: typeof import("nuxt-split-type").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["@fdcn/nugget"]?: typeof import("@fdcn/nugget").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/stevenjohn/Documents/Projects/popcorn/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["unhead"]?: typeof import("nuxt-unhead").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/critters", Exclude<NuxtConfig["critters"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-purgecss", Exclude<NuxtConfig["purgecss"], boolean>] | ["@vite-pwa/nuxt", Exclude<NuxtConfig["pwa"], boolean>] | ["@nuxtjs/html-validator", Exclude<NuxtConfig["htmlValidator"], boolean>] | ["@nuxtjs/fontaine", Exclude<NuxtConfig["fontMetrics"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-delay-hydration", Exclude<NuxtConfig["delayHydration"], boolean>] | ["nuxt-split-type", Exclude<NuxtConfig["splitType"], boolean>] | ["@fdcn/nugget", Exclude<NuxtConfig["@fdcn/nugget"], boolean>] | ["/Users/stevenjohn/Documents/Projects/popcorn/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-unhead", Exclude<NuxtConfig["unhead"], boolean>] | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   indexable: boolean,
  }
  interface PublicRuntimeConfig {
   trailingSlash: boolean,

   titleSeparator: string,

   siteName: string,

   siteUrl: string,

   siteDescription: string,

   language: string,

   "nuxt-seo-kit": {
      splash: boolean,

      siteName: string,

      siteDescription: string,

      siteImage: any,

      siteUrl: string,

      titleSeparator: string,

      trailingSlash: boolean,

      language: string,

      indexable: boolean,
   },

   "nuxt-unhead": {
      seoOptimise: boolean,

      resolveAliases: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }