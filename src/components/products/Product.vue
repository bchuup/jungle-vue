<template>
  <article class="product">
    <img :src="product.image">
    <header>
      <h2>{{ product.title }}</h2>
    </header>
    <p class="description">
      {{ product.description }}
    </p>

    <footer class="actions">
      <button class="btn btn-primary"@click="addToCart">add to cart</button>
      <router-link
        :to="{ path: '/'+product.id }"
        v-bind:product="product"
      >
        <button class="btn btn-primary">Details: {{ product.id }}</button>
      </router-link>
    </footer>

    <aside class="price">
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