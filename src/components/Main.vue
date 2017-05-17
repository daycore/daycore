<template>
  <div class="hello">

    <my-header></my-header>
    <news></news>
  </div>
</template>

<script>
  import MyHeader from './Main/Header'
  import News from './Main/News'
  export default {
    components: {
      News,
      MyHeader
    },
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
