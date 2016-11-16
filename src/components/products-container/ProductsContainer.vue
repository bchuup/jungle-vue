<template>
  <article class="product">
    <header>
      header
    </header>
    <img src= "http://i62.tinypic.com/wb8nz9.jpg">
    <p class="description">
      {{productTitle}}
    </p>

    <footer class="actions">
      <button @click="addToCart">add to cart</button>
    </footer>

    <aside class="price">
      price
    </aside>

  </article>
</template>

<script>
  import { eventBus } from '../../main'
  export default {
    data: function () {
      return {
        productImg: "http://i62.tinypic.com/wb8nz9.jpg",
        productTitle: "ice cream"
      }
    },
    methods: {
      addToCart(){
        eventBus.$emit('addedToCart')
      }
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