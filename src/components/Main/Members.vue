<template>
  <div class="hero is-fullheight background">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2 is-spaced">데이코어 가.족같은 멤버</h1>
        <h1 class="subtitle is-4">가족이 뭐야 먹는거야?</h1>

        <div class="team">
          <h3 class="title is-4 is-spaced">운영팀</h3>
          <div class="columns is-mobile is-multiline">
            <member-card v-for="member in members.management" v-bind:key="member.name" class="column is-2-desktop is-2-tablet is-6-mobile" :member="member"></member-card>
          </div>
        </div>
        <div class="team">
          <h3 class="title is-4 is-spaced">개발팀</h3>
          <div class="columns is-mobile is-multiline">
            <member-card v-for="member in members.development" v-bind:key="member.name" class="column is-2-desktop is-2-tablet is-6-mobile" :member="member"></member-card>
          </div>
        </div>
        <div class="team">
          <h3 class="title is-4 is-spaced">전담 트레이너</h3>
          <div class="columns is-mobile is-multiline">
            <member-card v-for="member in members.training" v-bind:key="member.name" class="column is-2-desktop is-2-tablet is-6-mobile" :member="member"></member-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MemberCard from './MemberCard'
  export default {
    components: {MemberCard},
    name: 'members',
    props: ['members']
  }
</script>

<style scoped>
  .hero.is-fullheight {
    background: url(../../assets/bg_members.jpg) no-repeat fixed center center;
    background-size: cover;
  }

  .container {
    max-width: 1200px;
  }

  .title {
    color: white;
  }

  .subtitle {
    color: white;
  }

  .team .title {
    margin: 50px 0 20px 5px;
    padding: 5px 0px 5px 15px;
    border-left: 5px solid #ffa000;
  }

  .columns {
    width: 100%;
    margin: 0 auto;
  }

</style>
