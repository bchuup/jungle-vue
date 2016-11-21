<template>
  <section class="products-show">
  <header class="page-header">
    <h1>{{product.title }}</h1>
  </header>
  <article class="product-detail">
    <div class="row">
      <div class="col-sm-4">
        <img :src="product.thumbnail_url">
      </div>
      <div class="col-sm-8">
        <dl class="dl-horizontal">
          <dt>Product ID:</dt>
          <dd>{{ $route.params.id }}</dd>
          <dt>Name:</dt>
          <dd><strong>{{ product.title }}</strong></dd>
          <dt>Description:</dt>
          <dd>{{ product.content }}</dd>
          <dt>Quantity</dt>
          <dd>6</dd>
          <dt>Price</dt>
          <dd>$100</dd>
        </dl>
        <dl class="dl-horizontal">
          <dt>Reviews</dt>
            <dd class="form-group">
              <input type="text" class="form-control" v-model="review.content">
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
        review: {
          'title': "Health Matters for Devs",
          'thumbnail_url': 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-456874.jpg',
          'content': '',
          'tags': ["testing 123", "yet another test"]
        },
        resource: {}
      }
    },
    methods: {
      submit() {
        console.log(this.review)
        // this.$http.post('', this.review)
        //   .then(res => {
        //     console.log(res)
        //   }), err => {
        //     console.log(err)
        //   }
        this.resource.save({}, this.review)
        this.review = ''
      }
    },
    created() {
      this.$http.get(`${this.$route.params.id }`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.product = data
        // console.log(this.product)
      })
      this.resource = this.$resource('');

    }
  }
</script>