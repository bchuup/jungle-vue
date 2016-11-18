import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueMaterialComponents from 'vue-material-components'
import App from './App.vue'
import 'vue-material-components/assets/css/materialize.min.css'


import { routes } from './routes'

import Navbar from './components/Navbar.vue'
import ProductsContainer from './components/products/ProductsContainer.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterialComponents)

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
