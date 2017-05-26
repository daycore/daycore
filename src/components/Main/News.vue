<template>
  <section class="hero  is-fullheight has-text-centered">

    <div class="hero-body">

      <div class="left" v-on:click="onClick($event, 'left')" v-on:mouseover="onMouseOver($event, 'left')" v-on:mouseout="this.onMouseOut">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>

      <div class="container">
        <div class="title-container">
          <h1 class="title is-1 is-spaced">안녕, <strong>데이코어는</strong> 처음이지?</h1>
          <h2 class="subtitle is-6">여기에는 즐거운 데이코어 기사들이 있지 한번 확인해봐</h2>
        </div>
        <div class="news-wrap" id="news">
          <div class="columns is-mobile">
            <news-card class="news-card column is-3-desktop is-4-tablet is-8-mobile" v-for="item in articles"
                       v-bind:key="item.title"
                       v-bind:item="item"></news-card>
          </div>
        </div>
      </div>

      <div class="right" v-on:click="onClick($event, 'right')" v-on:mouseover="onMouseOver($event, 'right')" v-on:mouseout="this.onMouseOut">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>

    </div>
  </section>
</template>
<script>
  import NewsCard from './NewsCard'
  import MobileDetect from 'mobile-detect'
  import Velocity from 'velocity-animate'

  export default {
    components: {NewsCard},
    name: 'news',
    props: ['articles'],
    watch: {
      isScrolling: function (newScrollingStatus) {
        // 새로운 스크롤 상태가 스크롤 중이라면 스크롤 서비스 실행
        if (newScrollingStatus) {
          const newsElement = document.querySelector('#news > .columns')
          const maxWidth = document.querySelector('#news > .columns > .card').clientWidth * this.articles.length

          // 스크롤 핸들러 실행
          this.scrollingHanddler = setInterval(() => {
            let calcLeft = this.scrollingDirection === 'left' ? --this.left : ++this.left
            if (calcLeft > 0) {
              this.left = 0
            } else if (calcLeft < -maxWidth) {
              this.left = -maxWidth
            }
            newsElement.style.transform = `translate(${this.left}px, 0px)`
          }, 0)
        } else if (this.scrollingHanddler !== null) {
          clearInterval(this.scrollingHanddler)
        }
      }
    },
    data: function () {
      return {
        left: 0,
        scrollingDirection: 'right',
        isScrolling: false
      }
    },
    methods: {
      onMouseOver: function (event, direction) {
//        if (this.isScrolling) return
//        this.scrollingDirection = direction
//        this.isScrolling = true
      },
      onMouseOut: function (event) {
//        this.isScrolling = false
      },
      onClick: function (event, direction) {
        const newsElement = document.querySelector('#news > .columns')
        const cardWidth = document.querySelector('.card').clientWidth
        var index = 0

        if (direction === 'left') {
          index = parseInt(-this.left / cardWidth) + 1
          if (index >= document.getElementsByClassName('news-card').length) {
            return
          }
          this.left = -index * cardWidth
          Velocity(newsElement, { translateX: `${this.left - 19.2 * index}px` }, { duration: 600 })
        } else {
          index = parseInt(this.left / cardWidth) + 1
          if (index >= 1) {
            return
          }
          this.left = index * cardWidth
          Velocity(newsElement, { translateX: `${this.left + 19.2 * index}px` }, { duration: 600 })
        }
      }
    },
    mounted: function () {
      if (new MobileDetect(window.navigator.userAgent).mobile()) {
        document.querySelector('#news').className += ' mobile-scroll'
      }
    }
  }
</script>
<style lang="scss" scoped>

  @mixin transition($animation...) {
    -moz-transition: $animation;
    -webkit-transition: $animation;
    transition: $animation;
  }

  .hero-body {
    overflow: hidden;
    position: relative;
    padding: 0;
  }

  .container {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    max-width: inherit;
  }

  #news > .columns {
    overflow: visible;
  }

  .news-wrap {
    width: 100%;
    padding: 2.5rem;
    background: rgb(240, 244, 244);
  }

  .news-wrap.mobile-scroll {
    overflow-x: scroll;
  }

  .news-card {
    margin-left: 0.6rem;
    margin-right: 0.6rem;

    @include transition(opacity 0.75s ease-in-out)
  }

  .title-container {
    padding: 1.5rem;
  }

  .left, .right {
    position: absolute;
    top: calc(50%);
    width: 120px;
    height: 110px;
    background-color: rgba(72, 57, 73, 0.5);
    z-index: 9;
    cursor: pointer;
    text-align: center;
    line-height: 110px;
    color: white;

    @include transition(background-color 0.35s ease-in-out)
  }

  .left:hover {
    background-color: rgba(239, 131, 118, 0.75);
  }

  .right:hover {
    background-color: rgba(239, 131, 118, 0.75);
  }

  .left {
    left: -75px;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
  }

  .right {
    right: -75px;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
  }

  .material-icons {
    font-size: 40pt;
    vertical-align: middle;
  }

  .left .material-icons {
    margin-left: 65px;
  }

  .right .material-icons {
    margin-right: 65px;
  }
</style>
