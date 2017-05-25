<template>
  <div class="hero is-fullheight">
    <div class="inner hero-body">
      <div class="container">
        <div class="contact">
          <h3 class="title is-spaced">Contant Us</h3>
          <div class="field">
            <label class="label">Username</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="보내는 사람">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
              <!--<span class="icon is-small is-right">-->
                <!--<i class="fa fa-check"></i>-->
              <!--</span>-->
            </p>
            <!--<p class="help is-success">This username is available</p>-->
          </div>
          <div class="field">
            <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="이메일 주소">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <!--<span class="icon is-small is-right">-->
                <!--<i class="fa fa-warning"></i>-->
              <!--</span>-->
            </p>
            <!--<p class="help is-danger">이메일 형식이 옳지 않습니다. 다시 입력해주세요:(</p>-->
          </div>
          <div class="field">
            <label class="label">Phone Number</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="연락처(ex.010-1234-5678)">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <!--<span class="icon is-small is-right">-->
                <!--<i class="fa fa-warning"></i>-->
              <!--</span>-->
            </p>
            <!--<p class="help is-danger">연락처 형식이 옳지 않습니다. 다시 입력해주세요:(</p>-->
          </div>
          <div class="field">
            <label class="label">Message</label>
            <p class="control">
              <textarea class="textarea" placeholder="이메일 내용을 입력해주세요"></textarea>
            </p>
          </div>
          <div class="columns field">
            <div class="column is-6-desktop is-6-tablet is-12-phone">
              <a class="button is-primary">Submit</a>
            </div>
            <div class="column is-6-desktop is-6-tablet is-12-phone">
              <a class="button is-danger">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'contact-us'
  }
</script>

<style lang="scss" scoped>
  .hero {
    background: url('../../assets/bg_contactUs.png') fixed no-repeat center center;
    background-size: cover;
  }

  .contact {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 0 20px 0;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
  }

  .title {
    padding: 15px 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #00c4a7;
    color: #fff;
  }

  .field {
    padding: 0 20px;
  }

  .button.is-primary {
    width: 100%;
    height: 40px;
  }

  .button.is-danger {
    width: 100%;
    height: 40px;
  }
</style>
