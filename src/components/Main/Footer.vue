<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">

        <p class="title is-5">
          <strong>데이코어 주식회사</strong>
        </p>
        <p class="subtitle is-6">주소 : 서울특별시 강남구 도산대로 55길 45 2층 | 대표전화 : 070-7501-5926</p>
        <p class="subtitle is-6">사업자등록번호 : 144-81-14007 | 대표자 : 최경민 | 통신판매업신고번호 : 제2016-서울강남-03264호</p>
        <p class="subtitle is-6"><i class="fa fa-envelope"></i> info@daycore.co.kr</p>
        <p>
          <a class="icon" href="https://www.facebook.com/gymdaykorea">
            <img src="../../assets/footer_facebook_color.png">
          </a>
          <a class="icon" href="http://instagram.com/gymday_official">
            <img src="../../assets/footer_instagram_color.png">
          </a>
          <a class="icon" href="http://youtube.com">
            <img src="../../assets/footer_youtube_color.png">
          </a>
          <a class="icon" href="">
            <img src="../../assets/footer_naver_color.png">
          </a>

        </p>


      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'my-footer'
  }
</script>

<style lang="scss" scoped>

  p {
    color: black;
  }

  .subtitle {
    margin-top: -30px;
    padding-top: 18px;
  }

  .icon {
    width: 50px;
    margin: 20px;
    vertical-align: top;
  }

</style>
