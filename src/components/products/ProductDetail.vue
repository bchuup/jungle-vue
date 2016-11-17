<template>
  <section class="products-show">
  <header class="page-header">
    <h1>{{product.title }}</h1>
  </header>
  <article class="product-detail">
    <div class="row">
      <div class="col-sm-4">
        <img :src="product.image">
      </div>
      <div class="col-sm-8">
        <dl class="dl-horizontal">
          <dt>Product ID:</dt>
          <dd>{{ $route.params.id }}</dd>
          <dt>Name:</dt>
          <dd>{{ product.title }}</dd>
          <dt>Description:</dt>
          <dd>{{ product.description }}</dd>
          <dt>Quantity</dt>
          <dd>6</dd>
          <dt>Price</dt>
          <dd>$100</dd>
        </dl>
        <dl class="dl-horizontal">
          <dt>Reviews</dt>
            <dd class="form-group">
              <input type="text" class="form-control" v-model="review">
              <button class="btn btn-primary" @click="submit">Submit Review</button>
            </dd>
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
    data: function() {
      return {
        product: '',
        review: '',
        resource: {}
      }
    },
    methods: {
      submit() {
        console.log(this.review)
        this.$http.post('reviews', {review: this.review})
          .then(res => {
            console.log(res)
          }), err => {
            console.log(err)
          }
        // this.resource.save({}, this.review)
        this.review = ''
      }
    },
    created() {
      this.$http.get(`products/${this.$route.params.id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.product = data
      })
      this.resource = this.$resource(`${this.$route.params.id}/review`);
    }
  }
</script>