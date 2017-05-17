<template>
  <div class="hello">

    <my-header></my-header>
    <news></news>
    <about></about>

  </div>
</template>

<script>
  import MyHeader from './Main/Header'
  import News from './Main/News'
  import About from './Main/About'

  export default {
    components: {
      About,
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
