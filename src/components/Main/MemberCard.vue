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
          <p class="title is-4 is-spaced">{{member.name}}</p>
          <p class="subtitle">{{member.position}}</p>
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
  .title:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  .subtitle {
    font-size: 11pt;
  }
</style>
