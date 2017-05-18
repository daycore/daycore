<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img v-bind:src="item.image" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'news-card',
    props: ['item']
  }
</script>
<style lang="scss" scoped>

  @mixin transition($animation...) {
    -moz-transition: $animation;
    -webkit-transition: $animation;
    transition: $animation;
  }

  .card {
    cursor: pointer;
  }

  .title {
    color: #483949;
    font-weight: 600;
    @include transition(color 0.35s ease-in-out)
  }

  .title:hover {
    color: #ef8376;
  }
</style>
