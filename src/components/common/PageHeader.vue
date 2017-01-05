<!--
  Header component 
-->
<template>
  <section class="Header">
    <div class="heading flex">
      <img src="../../assets/img/badge_white.svg">
      <div class="separator"></div>
      <NavMenu />
    </div>
    <Heading />
  </section>
</template>

<script>
  import NavMenu from './PageHeader/NavMenu'
  import Heading from './PageHeader/Heading'

  export default {
    name: 'PageHeader',
    components: {
      NavMenu,
      Heading
    }
  }
</script>

<style lang="scss">
  section.Header {
    height: 100vh;
    background-image: url('../../assets/img/header.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    img {
      height: 50px;
    }

    .heading {
      align-items: center;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }

    .separator {
      flex-grow: 1;
      height: 1px;
      background-color: white;
      margin: 0 15px;
    }

    .title {
      margin-top: 25vh;
    }
  }
</style>