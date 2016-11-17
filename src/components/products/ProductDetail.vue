<template>
  <section class="products-show">
  <header class="page-header">
  </header>
  <article class="product-detail">
    <div class="row">
      <div class="col-sm-4">
      </div>
      <div class="col-sm-8">
        <dl class="dl-horizontal">
          <dt>Name {{ id }}</dt>
          <dt>Description</dt>
          <dt>Quantity</dt>
          <dt>Price</dt>
        </dl>
        <dl class="dl-horizontal">
          <dt>Reviews</dt>
              <br><dd><strong>User</strong></dd>
              <dd><strong>Description</strong></dd>
              <dd><strong>Rating</strong></dd>
              </dd><br>
              <br>
          </dd>
          </dl>
      </div>
    </div>
  </article>
</section>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      }
    }
  }
</script>