<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="member.image" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{member.name}}</p>
          <p class="subtitle is-6">{{member.position}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'member-card',
    props: ['member']
  }
</script>

<style scoped>
  .title {
    margin-bottom: 1.8rem;
  }
</style>
