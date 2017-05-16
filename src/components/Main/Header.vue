<template>
  <div class="header">

    <div class="inner">
      <div class="content">
        <h1 class="title is-1">GYMDAY</h1>
        <h2 class="subtitle is-4">나의 운동 여러분의 운동 함께합니다</h2>

        <div id="button-groups" class="columns">
          <div id="download-button" class="round-button column">Download</div>
          <div id="more-button" class="round-button column">Learn More</div>
        </div>
      </div>
    </div>

    <nav id="nav">
      <ul>
        <li style="white-space: nowrap;"><a href="index.html">Home</a></li>
        <li class="opener" style="-webkit-user-select: none; cursor: pointer; white-space: nowrap;">
          <a href="#">Dropdown</a>

          <ul class="" style="-webkit-user-select: none; display: none; position: absolute;">
            <li style="white-space: nowrap;"><a href="#" style="display: block;">Lorem ipsum dolor</a></li>
            <li style="white-space: nowrap;"><a href="#" style="display: block;">Magna phasellus</a></li>
            <li style="white-space: nowrap;"><a href="#" style="display: block;">Etiam dolore nisl</a></li>
            <li class="opener" style="-webkit-user-select: none; cursor: pointer; white-space: nowrap;">
              <a href="#" style="display: block;">And a submenu …</a>
              <ul class="dropotron" style="-webkit-user-select: none; display: none; position: absolute;">
                <li style="white-space: nowrap;"><a href="#" style="display: block;">Lorem ipsum dolor</a></li>
                <li style="white-space: nowrap;"><a href="#" style="display: block;">Phasellus consequat</a></li>
                <li style="white-space: nowrap;"><a href="#" style="display: block;">Magna phasellus</a></li>
                <li style="white-space: nowrap;"><a href="#" style="display: block;">Etiam dolore nisl</a></li>
              </ul>
            </li>
            <li style="white-space: nowrap;"><a href="#" style="display: block;">Veroeros feugiat</a></li>
          </ul>
        </li>
        <li style="white-space: nowrap;"><a href="left-sidebar.html">Left Sidebar</a></li>
        <li style="white-space: nowrap;"><a href="right-sidebar.html">Right Sidebar</a></li>
        <li style="white-space: nowrap;"><a href="no-sidebar.html">No Sidebar</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'my-header'
  }
</script>

<style scoped>
  .header {
    height: 100vh;
    min-height: 40em;
    position: relative;
    background-size: cover;
    background: black url('../../assets/header.jpg') fixed center center;
    color: #fff;
    text-align: center;
    padding: 7.5em 0 2em 0;
    cursor: default;
  }

  .header:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  .header:after {
    content: '';
    background: #1C0920;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .header .inner {
    position: relative;
    z-index: 1;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }

  /*.header .inner .content {*/
  /*text-align: right;*/
  /*}*/

  .header .inner .title {
    color: white;
    font-weight: 600;
  }

  .header .inner .subtitle {
    color: white;
  }

  .round-button {
    box-shadow: none;
    border-radius: 4px;
    border: 1px solid white;
    margin: 10px;
  }

  #download-button {
    background-color: transparent;
    color: white;
  }

  #more-button {
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
</style>
