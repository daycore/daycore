<template>
  <section class="hero  is-fullheight has-text-centered">

    <div class="hero-body">

      <div class="left" v-on:mouseover="onMouseOver($event, 'left')" v-on:mouseout="this.onMouseOut">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>

      <div class="container">
        <div class="title-container">
          <h1 class="title is-1">안녕, 너는 <strong>데이코어의</strong> 기사를 보고있어.</h1>
          <h2 class="subtitle is-6">여기에는 즐거운 데이코어 기사들이 있지 한번 확인해봐</h2>
        </div>
        <div class="news-wrap" id="news">
          <div class="columns is-mobile">
            <news-card class="news-card column is-3-desktop is-4-tablet is-8-mobile" v-for="item in items"
                       v-bind:key="item.title"
                       v-bind:item="item"></news-card>
          </div>
        </div>
      </div>

      <div class="right" v-on:mouseover="onMouseOver($event, 'right')" v-on:mouseout="this.onMouseOut">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>

    </div>
  </section>
</template>
<script>
  import NewsCard from './NewsCard'
  export default {
    components: {NewsCard},
    name: 'news',
    watch: {
      isScrolling: function (newScrollingStatus) {
        // 새로운 스크롤 상태가 스크롤 중이라면 스크롤 서비스 실행
        if (newScrollingStatus) {
          const newsElement = document.querySelector('#news > .columns')
          const maxWidth = document.querySelector('#news > .columns > .card').clientWidth * this.items.length

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
        items: [
          {
            title: 'G.PACE 출시',
            description: '운동코치 짐데이, 블루투스 연동 스마트 체중계 G.PACE 출시',
            image: require('../../assets/news1.png')
          },
          {
            title: '카파, 전문 스포츠 브랜드로 영역 확대',
            description: '확대를 하고 하고 또 하고',
            image: require('../../assets/news2.png')
          },
          {
            title: '운동코치 짐데이, 피트니스 페스티벌 진행',
            description: '모바일 운동코치 짐데이, 20일 피트니스 페스티벌 진행',
            image: require('../../assets/news3.png')
          },
          {
            title: '원앤파트너스 등으로부터 투자유치',
            description: '"운동코치 짐데이" 데이코어, 원앤파트너스 등으로부터 투자유치',
            image: require('../../assets/news4.png')
          },
          {
            title: '스포츠 산업 "잡콘서트" 개최',
            description: '스포츠 산업 "잡콘서트" 개최...\n취업.창업, 트렌드에 민감하라',
            image: require('../../assets/news5.png')
          },
          {
            title: '비싼 PT, 앱 하나면 끝',
            description: '삼성.네이버 출신 "몸짱" 개발자 "비싼 PT, 앱 하나면 끝"',
            image: require('../../assets/news6.png')
          },
          {
            title: '"짐데이"오늘의 앱으로 선정',
            description: '[오늘의 앱]스마트폰이 피트니스 코치로..."짐데이"',
            image: require('../../assets/news6.png')
          },
          {
            title: '으뜸앱 선정',
            description: '대한민국 모바일 어워드 5월의 으뜸앱 선정',
            image: require('../../assets/news7.png')
          }
        ],
        left: 0,
        scrollingDirection: 'right',
        isScrolling: false
      }
    },
    methods: {
      onMouseOver: function (event, direction) {
        if (this.isScrolling) return
        this.scrollingDirection = direction
        this.isScrolling = true
      },
      onMouseOut: function (event) {
        this.isScrolling = false
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
