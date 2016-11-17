import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

import Navbar from './components/Navbar.vue'
import ProductsContainer from './components/products/ProductsContainer.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.http.options.root = "http://localhost:3004"

Vue.component('app-navbar', Navbar)
Vue.component('app-product-container', ProductsContainer)

export const eventBus = new Vue({
  methods: {
    addToCart(quantity) {
      this.$emit('addedToCart', quantity)
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
