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

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2) format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
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

  @include keyframes(borderBefore) {
    0% {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.0);
      transform: scale(0.8);
    }
    100% {
      top: -10px;
      left: -10px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      border: 2px solid rgba(0, 0, 0, 0.7);
      transform: scale(1);
    }
  }

  @include keyframes(borderAfter) {
    0% {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.0);
      transform: scale(0.8);
    }
    100% {
      top: -20px;
      left: -20px;
      width: calc(100% + 40px);
      height: calc(100% + 40px);
      border: 2px solid rgba(0, 0, 0, 0.8);
      transform: scale(1);
    }
  }

  .mobile-background-attachment {
    background-attachment: inherit !important;
  }

</style>
