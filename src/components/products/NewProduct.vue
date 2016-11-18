<template>
  <div class='newProduct'>
    <h1>ADD NEW PRODUCT</h1>
    <form>
      <div class="form-group">
        <label>Title</label>
        <input
          type="title"
          class="form-control"
          placeholder="title"
          v-model="product.title"
        >
      </div>
      <div class="form-group">
        <label>Picture</label>
        <input
          type="Picture"
          class="form-control"
          placeholder="Picture"
          v-model="product.picture"
        >
      </div>
      <div class="form-group">
        <label>Content</label>
        <textarea
          type="Content"
          class="form-control"
          placeholder="Content"
          v-model="product.content"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Tags</label>
        <input
          type="Tags"
          class="form-control"
          placeholder="Tags"
          v-model="product.tags"
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        product: {
          title: "",
          picture: "",
          content: "",
          tags: ""
        }
      }
    },
    methods: {
      submit() {
        console.log(this.product)
        this.resource.save({}, this.review)
        this.product = {}
      }
    },
    created() {
      this.resource = this.$resource('')
    }
  }

</script>

<style>
  .newProduct {
    margin-top: 8%;
  }

</style>