// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../../node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../../node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../../node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../../node_modules/nuxt/dist/app/plugins/router").default> &
  InjectionType<typeof import("../../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../../node_modules/nuxt-unhead/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../../node_modules/nuxt-schema-org/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../../node_modules/nuxt-split-type/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../../node_modules/@fdcn/nugget/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../../node_modules/nuxt-delay-hydration/dist/runtime/nuxt-plugin").default> &
  InjectionType<typeof import("../../../node_modules/@vite-pwa/nuxt/dist/runtime/plugins/pwa.client").default> &
  InjectionType<typeof import("../../../node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../../node_modules/nuxt/dist/app/plugins/check-if-layout-used").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:global-components' | 'nuxt:chunk-reload' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
