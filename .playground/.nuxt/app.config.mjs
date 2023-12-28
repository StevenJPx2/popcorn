
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "daf8746f-aca8-4bb3-a084-4ecd6a00baf5"
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
