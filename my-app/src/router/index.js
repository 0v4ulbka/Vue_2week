import store from '../store/index.js'
import Login from '../components/Login.vue'
import Register from "../components/SignUp.vue";
import {createRouter, createWebHistory} from 'vue-router'
import Products from "@/views/Products";
import Cart from "@/views/Cart";
import Order from "@/views/Order";

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else{
    next()
  }
})

export default router
