import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'prismjs/themes/prism.min.css'
import DemoifyUI from './lib'

const app = createApp(App)

app.use(router)

app.use(DemoifyUI)

app.mount('#app')
