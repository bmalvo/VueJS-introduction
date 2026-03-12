import { createApp } from 'vue'
import App from './App.vue'
import { router } from './RouterView.ts'

createApp(App).use(router).mount('#app')
