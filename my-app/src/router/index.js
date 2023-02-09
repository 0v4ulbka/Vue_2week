import store from '../store'
import Login from '../components/Login.vue'
import Register from "../components/SignUp.vue";
import {createRouter, createWebHistory} from 'vue-router'
import Products from "@/views/Products.vue";
import Cart from "@/views/Cart.vue";
import Order from "@/views/Order.vue";
import Logout from "@/components/Logout.vue";

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
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  }
]

const index = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

index.beforeEach((to, from, next) => {
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

export default index
