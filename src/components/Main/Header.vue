<template>
  <div id="header-container" class="header background hero is-medium is-fullheight">
    <div class="inner hero-body">
      <div class="container">
        <img class="logo" src="../../assets/logo_gymday.png"/>
        <h2 class="subtitle is-4">내 손안의 퍼스널 트레이너</h2>
        <h2 class="subtitle is-4">운동코치 짐데이</h2>
        <div id="button-groups" class="columns">
          <a v-bind:href="download" target="_blank" id="download-button"
             class="round-button column is-offset-3 is-3"><i
            class="material-icons">file_download</i>Download</a>
          <a v-on:click="onScrollDown" id="more-button" class="round-button column is-3"><i
            class="material-icons">keyboard_arrow_down</i>Learn More</a>
        </div>
      </div>
    </div>

    <nav id="nav">
      <ul>
        <li style="white-space: nowrap;"><a href="right-sidebar.html">Right Sidebar</a></li>
        <li style="white-space: nowrap;"><a href="no-sidebar.html">No Sidebar</a></li>
      </ul>
    </nav>

    <div id="learn-more" v-on:click="onScrollDown">
      <p>LEARN MORE</p>
      <i class="material-icons">keyboard_arrow_down</i>
    </div>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'

  export default {
    name: 'my-header',
    props: ['download'],
    methods: {
      onScrollDown: function () {
        const header = document.querySelector('#header-container')
        Velocity(header, 'scroll', {duration: 500, offset: header.offsetHeight})
      }
    }
  }
</script>

<style lang="scss" scoped>

  @mixin animation($animation...) {
    -o-animation: $animation;
    -moz-animation: $animation;
    -webkit-animation: $animation;
    animation: $animation;
  }

  @mixin transition($animation...) {
    -moz-transition: $animation;
    -webkit-transition: $animation;
    transition: $animation;
  }

  .header {
    position: relative;
    background: white url('../../assets/bg_header.jpg') no-repeat fixed center center;
    background-size: cover;
    color: #fff;
    text-align: center;
    cursor: default;
  }

  .header:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
  }

  .header:after {
    content: '';
    background: #1C0920;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  .header .inner {
    position: relative;
    z-index: 1;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }

  .header .inner .logo {
    width: 400px;
    margin-bottom: 40px;
    @include animation(fadeIn 1s);
  }

  .header .inner .subtitle {
    color: white;
    margin-top: -0.6rem;
    @include animation(fadeIn 2s);
  }

  .round-button {
    box-shadow: none;
    border-radius: 4px;
    border: 1px solid white;
    margin: 10px;
    font-weight: 800;
    height: 50px;

    /* 처음 로드 될때 애니메이션 */
    @include animation(fadeIn 3s);

    /* 버튼 애니메이션 */
    @include transition(background-color 0.35s ease-in-out, color 0.35s ease-in-out);
  }

  #download-button {
    background-color: transparent;
    color: white;
  }

  #download-button:hover {
    background-color: white;
    color: rgb(69, 50, 76);
  }

  #more-button {
    background-color: white;
    color: rgb(69, 50, 76);
  }

  #more-button:hover {
    background-color: transparent;
    color: white;
  }

  #button-groups {
    margin-top: 16px;
  }

  #nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 1.5em 0 1.5em 0;
    z-index: 1;
    overflow: hidden;
    display: none;
  }

  #nav > ul {
    line-height: 0px;
    position: relative;
    display: inline-block;
    margin: 0;
    height: 21px;
  }

  #nav > ul:before {
    left: 100%;
    margin-left: 1px;
    content: '';
    display: block;
    width: 300%;
    position: absolute;
    top: 50%;
    margin-top: -2px;
    height: 5px;
  }

  #nav > ul:after {
    content: '';
    display: block;
    width: 300%;
    position: absolute;
    top: 50%;
    margin-top: -2px;
    height: 5px;
  }

  #nav > ul > li {
    display: inline-block;
    margin: -9px 0.5em 0 0.5em;
    border-radius: 0.5em;
    padding: 0.85em;
    border: solid 1px transparent;

    @include transition(color 0.35s ease-in-out, border-color 0.35s ease-in-out);
  }

  #nav > ul > li > a {
    color: white;
  }

  #button-groups > * > .material-icons {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 4px;
    margin-left: -8px;
  }

  #learn-more {
    position: absolute;
    width: 100%;
    bottom: 0%;
    margin-bottom: 36px;
    cursor: pointer;
    z-index: 1;

    @include animation(bounce 2s infinite);
    @media screen and (max-height: 500px) {
      display: none;
    }
  }
</style>
