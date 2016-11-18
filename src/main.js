import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import App from './App.vue'

import { routes } from './routes'

import Navbar from './components/Navbar.vue'
import ProductsContainer from './components/products/ProductsContainer.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})

const router = new VueRouter({
  routes
})

Vue.http.options.root = "http://localhost:9000/api/articles"

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
