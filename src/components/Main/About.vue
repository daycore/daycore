<template>
  <div class="about" id="about" v-bind:style="{'background-size': bgSize + 'px'}">
    <img style="display: none" v-on:load="onLoadAboutImg($event)" src="../../assets/bg_about.png"/>
    <div class="hero intro">
      <div class="hero-body">
        <div class="container is-info">
          <div class="columns">
            <div id="ci-container"
                 class="column is-4-desktop is-offset-4-desktop is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile">
              <img id="ci" src="../../assets/ci.png"/>
            </div>
          </div>
          <div class="columns">
            <div class="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet is-12-mobile ">
              <hr>
              <h3 class="title is-6 is-spaced about-title">데이코어는 B2C 모바일 애플리케이션 서비스를 제공하는 스타트업 회사입니다.</h3>
            </div>
          </div>
          <!--<div class="columns">-->
            <!--<div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-hidden-mobile description">-->
              <!--<h3 class="title is-6 about-sub-title">-->
                <!--데이코어는 올바른 운동과 식습관 관리를 통해 사용자에게 가치를 제공하는 서비스를 제공함으로써-->
                <!--대표 서비스인 <b>'운동코치 짐데이'</b>와 오프라인 센터 <b>'랩짐데이'</b>를 운영하고 있습니다.-->
                <!--<br>-->
                <!--데이코어는 이러한 서비스를 통해 사용자의 생활습관, 체력, 신체프로필 및 건강데이터에 기반하여 실질적으로 운동을 코칭해주고-->
                <!--지속적으로 건강을 관리할 수 있는 최적화된 솔루션을 제공하고자 합니다.-->
              <!--</h3>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <div class="hero is-fullheight about-service">
      <div class="hero-body">
        <div class="container is-info">
          <div class="columns">
            <div class="column is-6-desktop is-6-tablet is-12-mobile about-gymday">
              <h3 class="title is-2 is-spaced service-title">
                GYMDAY
              </h3>
              <h3 class="title is-5">
                내 손안의 퍼스널 트레이너 <b>GYMDAY</b>
              </h3>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6-desktop is-offset-6-desktop is-6-tablet is-offset-6-tablet is-12-mobile about-labgymday">
              <h3 class="title is-2 is-spaced service-title">
                LAB GYMDAY
              </h3>
              <h3 class="title is-5">
                차별화된 모바일 트레이닝 솔루션 <b>LAB GYMDAY</b>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MobileDetect from 'mobile-detect'

  export default {
    name: 'about',
    data: function () {
      return {
        bgImgRatio: 0,
        bgSize: 0,
        positionY: 0
      }
    },
    methods: {
      handleScroll: function ($event) {
        const header = document.getElementById('header-container')
        const about = document.getElementById('about')
        if (window.pageYOffset < (about.offsetTop + (about.clientHeight / 2))) { // 스크롤이 About 중간보다 위에 있을 때
          if (this.positionY > 100) {
            this.positionY = 100
            return
          } else if (this.positionY < 0) {
            this.positionY = 0
            return
          }
          this.positionY = this.positionY + 1
          about.style.backgroundPositionY = this.positionY + '%'
        } else if (window.pageYOffset > (about.offsetTop + (about.clientHeight / 2)) && window.pageYOffset > (about.offsetTop + header.clientHeight)) { // 스크롤이 About 중간보다 아래에 있을 때
          if (this.positionY > 100) {
            this.positionY = 100
            return
          } else if (this.positionY < 0) {
            this.positionY = 0
            return
          }
          this.positionY = this.positionY - 1
          about.style.backgroundPositionY = this.positionY + '%'
        } else if (window.pageYOffset === (about.offsetTop + (about.clientHeight / 2)) && window.pageYOffset === 0) { // 스크롤이 About 중간에 있을 때
          this.positionY = 0
        }
      },
      onLoadAboutImg: function ($event) { // About 배경 이미지 로딩 시 이미지 크기 가져옴
        console.log($event.target.naturalWidth, $event.target.naturalHeight)
        this.bgImgRatio = $event.target.naturalWidth / $event.target.naturalHeight

        this.setBackgroundSize()
      },
      setBackgroundSize: function () { // About 배경 이미지에 따라 배경 크기 정의
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const windowRatio = windowWidth / windowHeight

        if (windowRatio >= this.bgImgRatio) {
          this.bgSize = windowWidth
        } else if (windowRatio < this.bgImgRatio) {
          this.bgSize = windowHeight * this.bgImgRatio
        }
      }
    },
    mounted () {
      // UserAgent 확인후 모바일이라면 background-attachment를 강제로  inherit 으로 변경한다
      if (new MobileDetect(window.navigator.userAgent).mobile()) {
        document.querySelector('#about').className += ' mobile-background-attachment'
      }
      window.addEventListener('scroll', this.handleScroll) // scroll 이벤트 발생 시 About 배경 이미지 애니메이션 작동
      window.addEventListener('resize', this.setBackgroundSize) // resize 이벤트 발생 시 About 배경 이미지 크기 조절
    }
  }
</script>

<style scoped lang="scss">
  @mixin animation($animation...) {
    -o-animation: $animation;
    -moz-animation: $animation;
    -webkit-animation: $animation;
    animation: $animation;
  }

  .about {
    background: url('../../assets/bg_about.png') no-repeat center center;
    /*background-size: cover;*/
  }

  .about:not(.mobile-background-attachment) {
    background-attachment: fixed;
  }

  .hero {
    background: transparent;
  }

  .intro > .hero-body {
    margin-top: 200px;
    margin-bottom: 200px;
    background: rgba(0, 0, 0, 0.7);
  }

  hr {
    width: 70px;
    border: 2px solid #ffffff;
    margin: -20px auto 30px auto;
  }

  .about-title {
    color: #fff;
    word-break: keep-all;
    text-align: center;
    line-height: 1.7;
  }

  .about-sub-title {
    max-width: 600px;
    margin: 30px auto;
    line-height: 1.9;
    color: #fff;
    word-break: keep-all;
  }

  .description {
    position: relative;
    margin-top: 30px;
    border: 1px solid #ffffff;
  }

  .description::before {
    content: '';
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    border: 2px solid #fff;
    position: absolute;
    top: -10px;
    left: -10px;
  }

  .about-service .column {
    position: relative;
    padding: 70px 30px;
    background: rgba(0, 0, 0, 0.3);
  }

  .about-service .column.about-gymday::before, .about-service .column.about-gymday::after {
    background: url('../../assets/gymday.png') no-repeat center center;
    background-size: contain;
  }

  .about-service .column.about-labgymday::before, .about-service .column.about-labgymday::after {
    background: url('../../assets/labgymday.png') no-repeat center center;
    background-size: contain;
  }

  .about-service .column::before, .about-service .column::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 50px;
    opacity: 0.1;
    transform: scale(0.8);
  }

  .about-service .column:hover::before {
    @include animation(borderBefore 0.7s ease-in-out 0.2s infinite);
  }

  .about-service .column:hover::after {
    @include animation(borderAfter 0.7s ease-in-out 0.3s infinite);
  }

  .about-service .about-labgymday {
    text-align: right;
  }

  .about-service .title {
    word-break: keep-all;
  }

  .about-service .title.service-title {
    font-weight: 600;
    letter-spacing: 7px;
    color: #fff;
  }

  .about-service .title:not(.service-title) {
    letter-spacing: 5px;
    color: rgba(255, 255, 255, 0.8);
  }

  #ci-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #ci-container > #ci {
    width: 75%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

</style>
