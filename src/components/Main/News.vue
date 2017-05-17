<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="left" v-on:mouseover="scrollToRight" v-on:mouseleave="scrollStop">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
      <div class="container">
        <h1 class="title">
          Full Height title
        </h1>
        <h2 class="subtitle">
          Full Height subtitle
        </h2>
        <div class="news-wrap" id="news">
          <div class="columns is-mobile">
            <news-card class="column is-3-desktop is-4-tablet is-8-mobile" v-for="item in items"
                       v-bind:item="item"></news-card>
          </div>
        </div>
      </div>
      <div class="right" v-on:mouseover="scrollToLeft" v-on:mouseleave="scrollStop">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>
    </div>
  </section>
</template>
<script>
  import NewsCard from './NewsCard'
  export default {
    components: {NewsCard},
    name: 'news',
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
            description: '',
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
        scroll: false
      }
    },
    methods: {
      scrollToRight: function () {
        console.log('scroll to right')
        document.getElementById('news').style.marginLeft = --this.left + 'px'
      },
      scrollToLeft: function () {
        console.log('scroll to left')
        document.getElementById('news').style.marginLeft = ++this.left + 'px'
      },
      scrollStop: function () {
      }
    }
  }
</script>
<style scoped="">
  .hero-body {
    position: relative;
    padding: 0;
  }

  .container {
    overflow: hidden;
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
  }

  .news-wrap {
    width: 100%;
  }

  .left, .right {
    position: absolute;
    top: calc(50% - 75px);
    width: 150px;
    height: 150px;
    background-color: rgba(72, 57, 73, 0.5);
    z-index: 9;
    cursor: pointer;
    text-align: center;
    line-height: 150px;
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
