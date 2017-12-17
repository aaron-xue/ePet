<template>
  <div id="app">
    <router-view/>
    <tabbar color='skyblue'>
      <tabbar-item selected link="/main">
        <img slot="icon" src="./assets/images/main_03.png">
        <img slot="icon-active" src="./assets/images/main_05.png">
        <span slot="label" >首页</span>
      </tabbar-item>
      <tabbar-item link="/classify">
        <img slot="icon" src="./assets/images/main_09.png">
        <img slot="icon-active" src="./assets/images/main_10.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item link="/shop">
        <img slot="icon" src="./assets/images/main_13.png">
        <img slot="icon-active" src="./assets/images/main_14.png">
        <span slot="label" >购物车</span>
      </tabbar-item>
      <tabbar-item link="/personal">
        <img slot="icon" src="./assets/images/main_17.png">
        <img slot="icon-active" src="./assets/images/main_18.png">
        <span slot="label" >我的E宠</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
  }
}
</script>

<style lang="less" rel="stylesheet/less">
#app{
  width: 100%;
  height: 100%;
}
.weui-bar__item_on{
  span{
    color: #00A6E2;
  }
}
</style>
