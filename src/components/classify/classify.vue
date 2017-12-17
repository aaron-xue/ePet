<template>
    <div class="classify">
        <x-header :left-options="{showBack: false}">
            <header class="clearfix rela top bgfff">
                <tabbar>
                    <tabbar-item selected link="/classify/classify_i">
                        <span slot="label">分类</span>
                    </tabbar-item>
                    <tabbar-item link="/classify/brand">
                        <span slot="label">品牌</span>
                    </tabbar-item>
                </tabbar>
                <a href="javascript:;" class="search"><img src="../main/img/search.png"></a>
            </header>
        </x-header>
        <router-view/>
    </div>
</template>
<script>
import { XHeader,Scroller,Grid,GridItem,Tabbar, TabbarItem} from 'vux'
export default {
  components: {
      XHeader,
    Tabbar,
    TabbarItem,
    Scroller,Grid,GridItem
  }
}
</script>
<style lang="less">
div.vux-header {
  background-color: #fff;
  padding: 0;
  position: absolute;
  z-index: 99;
  .vux-header-left,
  .vux-header-right {
    display: none;
  }
  .weui-tabbar {
    background-color: #fff;
    .weui-tabbar__label {
      line-height: 51px;
      span {
        vertical-align: middle;
      }
    }
  }
  .search{
      position: absolute;
      z-index: 2;
      right: -175px;
      img{
          width: 14px;
          height: 14px;
      }
  }
}
</style>


