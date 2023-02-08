import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Axios} from "axios"

createApp(App).use(store).use(router).mount('#app')

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}