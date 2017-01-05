<template>
  <div id="app">
    <PageHeader></PageHeader>
  </div>
</template>

<script>
import PageHeader from './components/common/PageHeader'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
@import './common.scss';

img {
  height: 50px;
}
</style>
