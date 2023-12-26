
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "f20bf91d-33df-4b29-ba6c-9256bee97ef1"
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
