<template>
  <div class="hello">

    <my-header></my-header>
    <about></about>
    <news></news>
    <members :members="members"></members>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from './Main/Header'
  import News from './Main/News'
  import About from './Main/About'
  import Members from './Main/Members'
  import MyFooter from './Main/Footer'

  export default {
    components: {
      MyFooter,
      Members,
      About,
      News,
      MyHeader
    },
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        members: [
          {name: '최경민', position: '대표', image: 'http://daycore.co.kr/img/section07_team1_hover.png'},
          {name: '권혁', position: '개발'},
          {name: '김동환', position: '매니저'},
          {name: '구용석', position: '매니저'},
          {name: '고현주', position: '개발'},
          {name: '박관호', position: '개발'},
          {name: '송진표', position: '개발'},
          {name: '우동오', position: '개발'},
          {name: '장우영', position: '디자이너'},
          {name: '정현지', position: '개발'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
