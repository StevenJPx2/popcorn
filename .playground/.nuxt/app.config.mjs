
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "919f5f52-ec1c-4a95-9b57-be956792a178"
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
