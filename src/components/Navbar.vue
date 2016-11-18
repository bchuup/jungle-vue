<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Jungle</a>
      </div>
      <div>
<md-menu>
  <md-button md-menu-trigger>Bottom Right</md-button>

  <md-menu-content>
    <md-menu-item>My Item 1</md-menu-item>
    <md-menu-item>My Item 2</md-menu-item>
    <md-menu-item>My Item 3</md-menu-item>
  </md-menu-content>
</md-menu>
        <ul class="nav navbar-nav navbar-right">
         <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">

              <span class="text-danger">Admin</span>
              <span class="caret"></span>
            </a>

          </li>
          <li>
            My Cart ({{cart}})
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    data: function (){
      return {
        cart:0
      }
    },
    created() {
      eventBus.$on('addedToCart', () => {
        this.cart++
      })
    }
  }
</script>

<style>
  .navbar {
    margin-bottom: 20px;
  }
</style>




