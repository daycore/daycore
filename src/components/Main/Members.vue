<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">데이코어 식구들</h1>
        <h1 class="subtitle is-4">식구가 뭐야 먹는거야?</h1>

        <div class="columns is-mobile is-multiline">
          <member-card v-for="member in members" v-bind:key="member.name" class="column is-2-desktop is-3-tablet is-6-mobile" :member="member"></member-card>
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
    background: url(../../assets/bg_members.png) no-repeat fixed center center;
    background-size: cover;
  }

  .title {
    color: white;
  }

  .subtitle {
    color: white;
  }
</style>
