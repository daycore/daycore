<template>
  <div class="about background" id="about" v-bind:style="{'background-position-y': `${positionY}%`}">
    <div class="hero is-fullheight intro" id="intro">
      <div class="hero-body">
        <div class="container is-info">
          <div class="columns">
            <div id="ci-container"
                 class="column is-4-desktop is-offset-4-desktop is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile">
              <img id="ci" src="../../assets/ci.png"/>
            </div>
          </div>
          <div class="columns">
            <div id="about-description-group"
                 class="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet is-12-mobile">
              <hr>
              <h3 class="title is-6 is-spaced about-title">DAYCORE는 모바일 운동 앱 서비스를 제공하는 스타트업 회사입니다.</h3>
              <h3 class="title is-6 is-spaced about-title">데이코어는 당신의 멋진 몸매을 응원합니다:)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight about-service" id="service">
      <div class="hero-body">
        <div class="container is-info">
          <div class="columns">
            <div class="column is-6-desktop is-6-tablet is-12-mobile about-gymday">
              <img class="logo" src="../../assets/logo_gymday.png"/>
              <h3 class="title is-5">
                내 손안의 퍼스널 트레이너 짐데이
              </h3>
              <p>
                <a class="link" v-bind:href="download" target="_blank">
                  더 알아보기
                  <i class="material-icons">arrow_forward</i>
                </a>
              </p>
            </div>
          </div>
          <div class="columns">
            <div
              class="column is-6-desktop is-offset-6-desktop is-6-tablet is-offset-6-tablet is-12-mobile about-labgymday">
              <img class="logo" src="../../assets/logo_labgymday.png"/>
              <h3 class="title is-5">
                차별화된 모바일 트레이닝 솔루션 랩짐데이
              </h3>
              <p>
                <a class="link" href="https://gymday-wannabe-web.firebaseapp.com/" target="_blank">
                  <i class="material-icons">arrow_back</i>
                  더 알아보기
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="learn-more" v-on:click="onScrollDownToNews">
        <p>LEARN MORE</p>
        <i class="material-icons">keyboard_arrow_down</i>
      </div>
    </div>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'

  export default {
    name: 'about',
    data: function () {
      return {
        positionY: 0
      }
    },
    props: ['download'],
    methods: {
      handleScroll: function () {
        this.backgroundAnimation()
        this.animationInView()
      },
      backgroundAnimation: function () {
        // About Section 이 화면 내에 있을때만 작동한다
        const aboutOffsetBottom = this.aboutElement.offsetTop + this.aboutElement.offsetHeight
        if (window.pageYOffset < aboutOffsetBottom && window.pageYOffset < aboutOffsetBottom) {
          this.positionY = (window.pageYOffset / (aboutOffsetBottom)) * 100
        }
      },
      animationInView: function () { // 해당 Element가 뷰에 보일 때 애니메이션 적용
        const windowHeight = window.innerHeight
        const intro = this.introElement
        const service = this.serviceElement

        if ((window.pageYOffset >= intro.offsetTop - (windowHeight / 2)) && (window.pageYOffset <= intro.offsetTop + (windowHeight / 2)) && !intro.classList.contains('fade-in')) {
          this.introElement.classList.add('fade-in') // ci
        } else if ((window.pageYOffset >= service.offsetTop - (windowHeight / 2)) && (window.pageYOffset <= service.offsetTop + (windowHeight / 2)) && !service.classList.contains('fade-in')) {
          this.serviceElement.classList.add('fade-in') // gymday, labgymday
        }
      },
      onScrollDownToNews: function () { // News로 스크롤 이동
        const service = document.querySelector('#service')
        Velocity(service, 'scroll', {duration: 500, offset: service.offsetHeight})
      }
    },
    mounted () {
      this.aboutElement = document.getElementById('about')
      this.introElement = document.getElementById('intro')
      this.serviceElement = document.getElementById('service')
      window.addEventListener('scroll', this.handleScroll) // scroll 이벤트 발생 시 About 배경 이미지 애니메이션 작동
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

  #about-description-group {
    padding: 1.5rem;
  }

  .about {
    background: url('../../assets/bg_about.jpg') no-repeat center center;
  }

  .about:not(.mobile-background-attachment) {
    background-attachment: fixed;
    background-position: center center;
  }

  .about.mobile-background-attachment {
    background-size: cover !important;
  }

  .is-fullheight {
    position: relative;
  }

  .hero {
    background: transparent;
  }

  .intro .container {
    max-width: 100%;
    padding: 20px 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .intro img {
    max-width: 300px;
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

  .learn-more {
    position: absolute;
    width: 100%;
    bottom: 0%;
    display: none;
    cursor: pointer;
    z-index: 1;
    color: #fff;
    text-align: center;

    @include animation(bounce 2s infinite);
    @media screen and (max-height: 500px) {
      display: none;
    }
  }

  .about-service .column {
    position: relative;
    padding: 30px 30px;
    background: rgba(0, 0, 0, 0.3);
  }

  .about-service .column.about-gymday::before, .about-service .column.about-gymday::after {
    background: url('../../assets/gymday.png') no-repeat center center;
    background-size: contain;
    display: none;
  }

  .about-service .column.about-labgymday::before, .about-service .column.about-labgymday::after {
    background: url('../../assets/labgymday.png') no-repeat center center;
    background-size: contain;
    display: none;
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
    @include animation(zoomBefore 0.7s ease-in-out 0.2s infinite);
  }

  .about-service .column:hover::after {
    @include animation(zoomAfter 0.7s ease-in-out 0.3s infinite);
  }

  .about-service .about-labgymday {
    text-align: right;
  }

  .about-service .title {
    margin-bottom: 10px;
    word-break: keep-all;
  }

  .logo {
    width: 300px;
    margin: 20px 0;
  }

  .about-gymday .logo {
    margin: 50px 0;
  }

  .about-service .title {
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.8);
  }

  .about-service .link {
    color: #fff;
    font-weight: 900;
    cursor: pointer;
  }

  .about-service .link .material-icons {
    cursor: pointer;
    font-size: 12pt;
    font-weight: 900;
    border: 2px solid #fff;
    border-radius: 50%;
    vertical-align: text-bottom;
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

  #intro:not(.fade-in) {
    opacity: 0;
  }

  #intro.fade-in {
    opacity: 1;
    @include animation(fadeIn 2s);
  }

  #service:not(.fade-in) .about-gymday, #service:not(.fade-in) .about-labgymday {
    opacity: 0;
  }

  #service.fade-in .about-gymday {
    opacity: 1;
    @include animation(slideToRight 2s);
  }

  #service.fade-in .about-labgymday {
    opacity: 1;
    @include animation(slideToLeft 2s);
  }

</style>
