<template>
  <div class="hero is-fullheight">
    <div class="inner hero-body">
      <div class="container">
        <div class="contact">
          <h3 class="title is-spaced">Contant Us</h3>
          <div class="field">
            <label class="label">Subject</label>
            <p class="control">
              <input v-model="subject" class="input" type="text">
            </p>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <p class="control">
              <textarea v-model="message" class="textarea"></textarea>
            </p>
          </div>
          <div class="columns field">
            <div class="column is-12-desktop is-12-tablet is-12-phone">
              <a v-on:click="sendMail" class="button is-primary">Submit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'contact-us',
    data: function () {
      return {
        subject: '', message: ''
      }
    },
    methods: {
      sendMail () {
        const query = encodeURI(`subject=${this.subject}&body=${this.message}`)
        window.location.href = `mailto:info@daycore.co.kr?${query}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    background: url('../../assets/bg_contactUs.jpg') fixed no-repeat center center;
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
