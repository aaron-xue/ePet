import Vue from 'vue'
import Brand from './brand.vue'
import '../../assets/stylus/reset.css'
import '../../mock/mockServer'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#brand',
  template: '<Brand/>',
  components: { Brand }
})