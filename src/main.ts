import './assets/main.css'
import 'vant/lib/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
