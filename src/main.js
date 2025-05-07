import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// laod components pages 
import Home from './pages/index.vue'
import Cart from './pages/cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


createApp(App)
  .use(router)
  .mount('#app')
