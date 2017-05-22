<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @mixin keyframes( $animationName ) {
    @-webkit-keyframes #{$animationName} {
      @content;
    }
    @-moz-keyframes #{$animationName} {
      @content;
    }
    @-o-keyframes #{$animationName} {
      @content;
    }
    @keyframes #{$animationName} {
      @content;
    }
  }

  @include keyframes(bounce) {
    0%, 20%, 50%, 80%, 100% {
      transform: translate(0px, 0px);
    }
    40% {
      transform: translate(0px, -30px);
    }
    60% {
      transform: translate(0px, -15px);
    }
  }

  @include keyframes(fadeIn) {
    0% {
      transform: translate(0px, 40px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  @include keyframes(zoomBefore) {
    0% {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(0.8);
    }
    100% {
      top: -10px;
      left: -10px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      transform: scale(1);
    }
  }

  @include keyframes(zoomAfter) {
    0% {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(0.8);
    }
    100% {
      top: -20px;
      left: -20px;
      width: calc(100% + 40px);
      height: calc(100% + 40px);
      transform: scale(1);
    }
  }

  @include keyframes(slideToRight) {
    0% {
      transform: translate(-40px, 0px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  @include keyframes(slideToLeft) {
    0% {
      transform: translate(40px, 0px);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  .mobile-background-attachment {
    background-attachment: inherit !important;
  }

</style>
