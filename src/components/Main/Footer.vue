<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">

        <p class="title is-5">
          <strong>데이코어 주식회사</strong>
        </p>
        <p class="subtitle is-6">주소 : 서울특별시 강남구 역삼로 169, 명우빌딩 5층 | 대표전화 : 070-7501-5926</p>
        <p class="subtitle is-6">사업자등록번호 : 144-81-14007 | 대표자 : 최경민 | 통신판매업신고번호 : 제2014-경기성남-0437호</p>

        <p>
          <a class="icon" href="https://github.com/jgthms/bulma">
            <i class="fa fa-github"></i>
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

</style>
