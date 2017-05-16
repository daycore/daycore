<template>
  <div class="header hero is-fullheight">
    <div class="inner hero-body">
      <div class="container">
        <h1 class="title is-1">GYMDAY</h1>
        <h2 class="subtitle is-4">나의 운동 여러분의 운동 함께합니다</h2>

        <div id="button-groups" class="columns">
          <a id="download-button" class="round-button column is-offset-3 is-3"><i
            class="material-icons">file_download</i>Download</a>
          <a id="more-button" class="round-button column is-3"><i
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

    <div id="learn-more">
      <p>LEARN MORE</p>
      <i class="material-icons">keyboard_arrow_down</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-header'
  }
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    background: white url('../../assets/header.jpg') no-repeat fixed center center;
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

  .header .inner .title {
    color: white;
    font-weight: 600;

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
  }

  .header .inner .subtitle {
    color: white;
    margin-top: -0.6rem;

    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }

  .round-button {
    box-shadow: none;
    border-radius: 4px;
    border: 1px solid white;
    margin: 10px;
    font-weight: 800;

    /* 처음 로드 될때 애니메이션 */
    animation: fadein 3s;

    /* 버튼 애니메이션 */
    -moz-transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
    -webkit-transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
    transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;
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
    -moz-transition: color 0.35s ease-in-out, border-color 0.35s ease-in-out;
    -webkit-transition: color 0.35s ease-in-out, border-color 0.35s ease-in-out;
    -ms-transition: color 0.35s ease-in-out, border-color 0.35s ease-in-out;
    transition: color 0.35s ease-in-out, border-color 0.35s ease-in-out;
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

    -webkit-animation: bounce 2s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: bounce 2s infinite; /* Firefox < 16 */
    -o-animation: bounce 2s infinite; /* Opera < 12.1 */
    animation: bounce 2s infinite;
  }
</style>
