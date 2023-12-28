
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "/Users/stevenjohn/Documents/Projects/popcorn/.playground/app.config"
import cfg1 from "/Users/stevenjohn/Documents/Projects/popcorn/app.config"

declare const inlineConfig = {
  "nuxt": {
    "buildId": "a1e7112f-3ab7-4a4b-8dd3-da40f2e8d9bb"
  }
}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
