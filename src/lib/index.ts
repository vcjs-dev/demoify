import DemoPanel from './components/DemoPanel.vue'
import DemoHeader from './components/DemoHeader.vue'
import DemoSidebar from './components/DemoSidebar.vue'
import DemoContainer from './components/DemoContainer.vue'
import DemoMain from './components/DemoMain.vue'

import type { App } from 'vue'

import './styles/main.scss'

export const install = (app: App) => {
  ;[DemoPanel, DemoHeader, DemoSidebar, DemoContainer, DemoMain].forEach(
    (v) => {
      app.component(v.name, v)
    },
  )
}

export default {
  install,
}

export { DemoPanel, DemoHeader }
