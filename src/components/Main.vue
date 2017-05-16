<template>
  <div class="hello">

    <my-header></my-header>

  </div>
</template>

<script>
  import MyHeader from './Main/Header'
  export default {
    components: {MyHeader},
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
