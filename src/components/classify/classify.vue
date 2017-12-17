<template>
    <div class="classify">
        <div class="classify_h">
            <tabbar>
                <tabbar-item selected link="/classify/classify_i">
                    <span slot="label">分类</span>
                </tabbar-item>
                <tabbar-item link="/classify/brand">
                    <span slot="label">品牌</span>
                </tabbar-item>
            </tabbar>
            <a href="javascript:;" class="search"><img src="../main/img/search.png"></a>
        </div>
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
.classify_h {
  background-color: #fff;
  position: absolute;
  z-index: 10;
  height: 51px;
  width: 100%;
  .weui-tabbar {
    margin-left: 10%;
    background-color: #fff;
    width: 80%;
    .weui-tabbar__label {
      line-height: 51px;
      span {
        vertical-align: middle;
      }
    }
  }
}
.search {
  position: absolute;
  z-index: 11;
  right: 20px;
  top: 20px;
  img {
    width: 14px;
    height: 14px;
  }
}
</style>


