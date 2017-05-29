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
        <p class="icon-group">
          <a class="icon circle" href="https://www.facebook.com/gymdaykorea">
            <img src="../../assets/footers/ic_facebook.png"/>
          </a>
          <a class="icon circle" href="http://instagram.com/gymday_official">
            <img src="../../assets/footers/ic_instagram.png"/>
          </a>
          <a class="icon circle" href="https://www.youtube.com/channel/UC0mtRNjXDzvpauAQSmX65MQ">
            <img src="../../assets/footers/ic_youtube.png"/>
          </a>
          <a class="icon circle" href="http://post.naver.com/my.nhn?memberNo=11714168">
            <img src="../../assets/footers/ic_naver.png"/>
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
  .footer {
  }

  p {
    color: black;
  }

  .subtitle {
    margin-top: -30px;
    padding-top: 18px;
  }

  .icon-group {
    margin-top: 2.2rem;
  }

  .icon {
    width: 30px;
    margin: 0 10px;
    vertical-align: top;
  }

  .icon.circle > img {
    width: 100%;
    -webkit-border-radius: 20%;
    -moz-border-radius: 20%;
    border-radius: 20%;
  }

  .fa-envelope {
    font-size: 12px;
    vertical-align: middle;
    color: gray;
  }
</style>
