import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main/main.vue'
import Classify from '../components/classify/classify.vue'
import Shop from '../components/shop/shop.vue'
import Personal from '../components/personal/personal.vue'
import Brand from "../components/classify/item/brand.vue";
import Classify_i from "../components/classify/item/classify_i.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      'redirect': '/main'
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/classify',
      component: Classify,
      children: [
        {
          path: '/classify',
          'redirect': '/classify/classify_i'
        },
        {
          path: '/classify/brand',
          component: Brand
        }, {
          path: '/classify/classify_i',
          component: Classify_i
        }
      ]
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
