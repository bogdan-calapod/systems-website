<!--
  Menu component

  TODO: Mobile menu
-->

<template>
  <ul class="menu flex">
    <li> about </li>
    <li> bachelor </li>
    <li> master </li>
    <li> people </li>
    <li> <img src="../../../assets/img/fb.svg"> </li>
    <li> <img src="../../../assets/img/mail.svg"> </li>
  </ul>
</template>

<style lang="scss">
  .menu {
    color: white;

    li {
      padding: 0 5px;
      cursor: pointer;
      position: relative;

      &:after {
        content: '';
        width: 0%;
        margin: 0 auto;
        height: 1px;
        background-color: white;
        position: absolute;
        transition: 0.4s all;
      }

      &:hover:after {
        width: calc(100% - 10px);
      }

      &:last-child:after,
      &:nth-last-child(2):after {
        left: 5px;;
        bottom: 0;
      }

      img {
        height: 20px;
        margin: 0 5px;
      }
    }
  }
</style>