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
          <p class="news-title title is-4">{{item.title}}</p>
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
<style>
  .news-title {
    font-size: 15pt;
    font-weight: 600;
    color: #333333;
    word-break: keep-all;
  }
</style>
