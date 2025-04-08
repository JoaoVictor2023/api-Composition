import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router' // importation de tous les fichiers dans router/

const app = createApp(App)

app.use(createPinia())
app.use(router) // instance Vue utilise le routeur que j'ai importé

app.mount('#app') 
