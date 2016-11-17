<template>
  <ul>
    <products :product='product' v-for="product in products">
    </products>
  </ul>
</template>

<script>
  import { eventBus } from '../../main'
  import Products from './Products.vue'

  export default {
    data: function () {
      return {
        products:''
      }
    },
    methods: {
      addToCart(){
        eventBus.$emit('addedToCart')
      }
    },
    components: {
      'Products': Products
    },
    created() {
      this.$http.get('http://localhost:3004/db')
      .then(response => {
        return response.json()
      })
      .then(data => {
          this.products = data.products
      })
    }
  }
</script>


<style>
  .product {
      margin-top: 40px;
      max-width: 260px;
      position:  relative;
      border:        1px solid #ccc;
      border-radius: 5px;
      padding:       15px;
      padding-bottom: 80px;
  }
  img {
    max-width: 100%;
  }
</style>