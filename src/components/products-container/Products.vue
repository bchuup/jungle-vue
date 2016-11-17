<template>
  <article class="product">
    <img :src="product.image">
    </header>
    <img :src= "productImg">
    <p class="description">
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
    props: ['product'],
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