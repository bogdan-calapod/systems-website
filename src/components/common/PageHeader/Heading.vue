<!--
  Title component
-->

<template>
  <div class="title flex">
    <div class="text">
      <h2>develop</h2>
      <h1>your skills</h2>
    </div>
    <ul class="icons flex column">
      <li><mobile /></li>
    </ul>
  </div>
</template>

<style lang="scss">
.title {
  color: white;
  width: 100%;
  justify-content: center;

  h1,
  h2 {
    margin: 0;
    padding: 0;
    text-align: right;
    font-size: 60px;
    font-weight: 100;
  }

  h1 {
    font-weight: 600;
    font-size: 100px;
  }

  h2 {
    margin-bottom: -25px;
  }

  .text {
    border-right: 5px solid white;
    padding-right: 10px;
    text-shadow: 0 0 15px rgba(black, 0.5);
  }
}
</style>
