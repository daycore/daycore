<template>
  <div class="hero is-fullheight">

    <div class="hero-body">
      <div class="container is-info">

        <div class="columns">

          <div id="ci-container" class="column is-6">
            <img id="ci" src="../../assets/ci.png"/>
          </div>

          <div class="column is-6 description">
            <h1 class="subtitle is-5">
              데이코어는 '운동코치 짐데이' B2C 모바일 애플리케이션 서비스를 중심으로<br>
              올바른 운동과 식습관 관리를 통해 사용자에게 가치를 제공하고자 하는 스타트업입니다.<br>

              사용자의 생활습관, 체력, 신체프로필 및 건강데이터에 기반하여 실질적으로 운동을 코칭해주고<br>
              지속적으로 건강을 관리할 수 있는 최적화된 솔루션을 제공하고자 합니다.<br>
            </h1>
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

  .hero.is-fullheight {
    background: url(../../assets/bg_about.png) no-repeat fixed center center;
    background-size: cover;
  }

  .subtitle {
    color: white;
    word-spacing: 5px;
    line-height: 40px;
  }

  #ci-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #ci-container > #ci {
    width: 75%;
  }

</style>
