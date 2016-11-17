<template>
  <div class="product-landing-page">
    <h1>PRODUCTS</h1>
    <ul class="list-group">
      <product
        class="list-group-item"
        :product='product'
        v-for="product in products"
      >
      </product>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from '../../main'
  import Product from './Product.vue'

  export default {
    data: function () {
      return {
        products: ''
      }
    },
    methods: {
      addToCart(){
        eventBus.$emit('addedToCart')
      }
    },
    components: {
      'Product': Product
    },
    created() {
      this.$http.get('')
      .then(response => {
        return response.json()
      })
      .then(data => {
          this.products = data
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