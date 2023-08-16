import DemoPanel from './components/DemoPanel.vue'
import DemoHeader from './components/DemoHeader.vue'

import type { App } from 'vue'

import './styles/main.scss'

export const install = (app: App) => {
  ;[DemoPanel, DemoHeader].forEach((v) => {
    app.component(v.name, v)
  })
}

export default {
  install,
}

export { DemoPanel, DemoHeader }
