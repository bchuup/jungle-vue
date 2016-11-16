<template>
  <div>
    <app-servers></app-servers>
  </div>
</template>

<script>
  import Servers from './Servers.vue'
  export default {
    components: {
      'app-servers': Servers
    }
  }

</script>