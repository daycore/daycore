<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import bowser from 'bowser'

  export default {
    name: 'app',
    mounted: function () {
      // UserAgent 확인후 모바일이라면 background-attachment를 강제로 inherit 으로 변경ㅇ한다
      if (bowser.mobile || bowser.msie) {
        const backgrounds = document.querySelectorAll('.background')
        for (let i = 0; i < backgrounds.length; i++) {
          backgrounds[i].className += ' mobile-background-attachment'
        }
      }
    }
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
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  @include keyframes(zoomAfter) {
    0% {
      transform: scale(0.8);
    }
    100% {
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

  .hero.is-fullheight .hero-body {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
  }

</style>
