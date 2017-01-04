<template>
  <div id="app">
    <h2> Hello </h2>
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/common/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './common.scss';

img {
  height: 50px;
}
</style>
