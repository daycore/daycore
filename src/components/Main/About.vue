<template>
  <div class="about">
    <div class="hero">
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
              <!--<h3 class="title is-2">About</h3>-->
              <hr>
              <h3 class="title is-6 is-spaced about-title">데이코어는 B2C 모바일 애플리케이션 서비스를 제공하는 스타트업 회사입니다.</h3>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-hidden-mobile description">
              <h3 class="title is-6 about-sub-title">
                데이코어는 올바른 운동과 식습관 관리를 통해 사용자에게 가치를 제공하는 서비스를 제공함으로써
                대표 서비스인 <b>'운동코치 짐데이'</b>와 오프라인 센터 <b>'랩짐데이'</b>를 운영하고 있습니다.
                <br>
                데이코어는 이러한 서비스를 통해 사용자의 생활습관, 체력, 신체프로필 및 건강데이터에 기반하여 실질적으로 운동을 코칭해주고
                지속적으로 건강을 관리할 수 있는 최적화된 솔루션을 제공하고자 합니다.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero is-fullheight">
      <div class="about-service">
        <div class="columns">
          <div class="column is-6-desktop is-10-tablet is-12-mobile about-gymday">
            <h3 class="title is-2 is-spaced service-title">
              GYMDAY
            </h3>
            <h3 class="title is-5">
              내 손안의 퍼스널 트레이너 <b>GYMDAY</b>
            </h3>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6-desktop is-offset-6-desktop is-10-tablet is-offset-2-tablet is-12-mobile about-labgymday">
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
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style scoped lang="scss">

  .about {
    background: url(../../assets/bg_about.png) no-repeat fixed center center;
    background-size: cover;
  }

  .hero {
    background: transparent;
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

  .about-service .columns {
    margin-top: 100px;
    margin-bottom: 300px;
  }

  .about-service .column {
    position: relative;
    padding: 70px 30px;
    background: rgba(0, 0, 0, 0.1);
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
    animation: borderBefore 0.7s ease-in-out 0.2s infinite;
    -webkit-animation: borderBefore 0.7s ease-in-out 0.2s infinite;
  }

  @keyframes borderBefore {
    0% {top:0px; left: 0px;width: 100%;height: 100%; border: 1px solid rgba(0, 0, 0, 0.0);transform: scale(0.8);}
    100% {top:-10px; left: -10px;width: calc(100% + 20px);height: calc(100% + 20px); border: 2px solid rgba(0, 0, 0, 0.7);transform: scale(1);}
  }

  @-webkit-keyframes borderBefore {
    0% {top:0px; left: 0px;width: 100%;height: 100%; border: 1px solid rgba(0, 0, 0, 0.0);transform: scale(0.8);}
    100% {top:-10px; left: -10px;width: calc(100% + 20px);height: calc(100% + 20px); border: 2px solid rgba(0, 0, 0, 1);transform: scale(1);}
  }

  .about-service .column:hover::after {
    animation: borderAfter 0.7s ease-in-out 0.3s infinite;
    -webkit-animation: borderAfter 0.7s ease-in-out 0.3s infinite;
  }

  @keyframes borderAfter {
    0% {top:0px; left: 0px;width: 100%;height: 100%; border: 1px solid rgba(0, 0, 0, 0.0);transform: scale(0.8);}
    100% {top:-20px; left: -20px;width: calc(100% + 40px);height: calc(100% + 40px); border: 2px solid rgba(0, 0, 0, 0.8);transform: scale(1);}
  }

  @-webkit-keyframes borderAfter {
    0% {top:0px; left: 0px;width: 100%;height: 100%; border: 1px solid rgba(0, 0, 0, 0.0);transform: scale(0.8);}
    100% {top:-20px; left: -20px;width: calc(100% + 40px);height: calc(100% + 40px); border: 2px solid rgba(0, 0, 0, 0.8);transform: scale(1);}
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
    color: rgba(255, 255, 255, 0.6);
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
