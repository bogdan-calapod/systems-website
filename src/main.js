// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mobile from './components/icons/mobile'
import Homepage from './Homepage'

// Icon components
Vue.component('mobile', mobile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Homepage/>',
  components: { Homepage }
})
