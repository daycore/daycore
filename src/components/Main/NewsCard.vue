<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img v-bind:src="item.image" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <!--<div class="media-left">-->
          <!--<figure class="image is-48x48">-->
            <!--<img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">-->
          <!--</figure>-->
        <!--</div>-->
        <div class="media-content">
          <p class="news-title is-4">{{item.title}}</p>
        </div>
      </div>
      <div class="content">
        <!--<p v-for="description in item.description.split('\\n')"></p>-->
        {{item.description}}
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
  .content {
    word-break: keep-all;
  }
</style>
