import { createApp } from 'vue'
import App from './App.vue'
import index from './router'
import store from './store'
import Axios from "axios"

createApp(App).use(store).use(index).mount('#app')

