<template>
  <div class="product col s12 m4 lg">
    <img :src="product.thumbnail_url">
    <header>
      <h2>{{ product.title }}</h2>
    </header>
    <p class="description">
      {{ product.content }}
    </p>

    <footer class="actions">
      <button class="btn btn-primary"@click="addToCart">add to cart</button>
      <router-link
        :to="{ name: 'productDetails', params: { id: product._id} }"
        :product="product"
      >
        <button class="btn btn-primary">
          Details
        </button>
      </router-link>
    </footer>

    <aside class="price">
    </aside>
  </div>
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