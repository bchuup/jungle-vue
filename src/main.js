import Vue from 'vue'
import App from './App.vue'

import Navbar from './components/navbar/Navbar.vue'
import ProductsContainer from './components/products-container/ProductsContainer.vue'

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
  render: h => h(App)
})
