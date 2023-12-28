
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "a1e7112f-3ab7-4a4b-8dd3-da40f2e8d9bb"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/stevenjohn/Documents/Projects/popcorn/.playground/app.config.ts"
import cfg1 from "/Users/stevenjohn/Documents/Projects/popcorn/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, inlineConfig)
