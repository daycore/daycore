<template>
  <div class="hello">

    <my-header></my-header>
    <about></about>
    <news></news>
    <members></members>

  </div>
</template>

<script>
  import MyHeader from './Main/Header'
  import News from './Main/News'
  import About from './Main/About'
  import Members from './Main/Members'

  export default {
    components: {
      Members,
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
