<template>
  <div class="main">
    <x-header :left-options="{showBack: false}">
      <div class="searchWrap">
        <div class="location">
          <a href="javascript:;">
            <span class="catordog c89">狗狗站</span>
            <span class="c89">|</span>
            <span data-name="my-place" class="myposition c89 ft13">重庆</span>
            <i></i>
          </a>
        </div>
        <p class="search-text">
          <a href="javascript:;"><input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="serach-ico"></span>
          </a>
        </p>
        <a href="javascript:;" class="epet-category"><img src="./img/mydope.png"></a>
      </div>
      <div class="find_nav" v-if="msg.menus">
        <scroller lock-y :scrollbar-x='false'>
          <div class="box1">
            <div class="box1-item" v-for="(item, index) in msg.menus" :key="index">
              <span>{{' ' +item.menu_name+ ' '}}</span>
            </div>
          </div>
        </scroller>
      </div>
    </x-header>
    <scroller lock-x scrollbar-y height="-40" ref="scroller">
      <div class="content">
        <swiper v-if="msg.datas" height='160px'>
          <swiper-item class="swiper-demo-img" v-for="(item, index) in msg.datas[0].value" :key="index">
            <img :src="item.image">
          </swiper-item>
        </swiper>
        <grid :cols="5" v-if="msg.datas">
          <grid-item v-for="(item, index) in msg.datas[2].menus" :key="index">
            <img :src='item.image' lazy="loaded">
          </grid-item>
        </grid>
        <div class="surprise">
          <div class="rela">
            <img src="./img/suprice.png">
            <span class="fl">距本场结束</span>
            <div class="time">
              <div class="time1 dib clearfix ft12 dtime">
                <span class="time1-1">01</span>
                <span class="time-zi ft12">:</span>
                <span class="time1-1">24</span>
                <span class="time-zi ft12">:</span>
                <span class="time1-1">40</span>
              </div>
            </div>
            <div class="more" v-if="msg.datas">
              <a href="javascript:;" class="db ftr"><img :src="msg.datas[5].content_images[0][0].image"></a>
            </div>
          </div>
          <scroller lock-y :scrollbar-x='false' ref="box2_scroll">
            <div class="box2" ref="box2">
              <div v-if="msg.datas">

                <div class="box2-item" v-for="(item, index) in msg.datas[5].goods" :key="index">
                  <div class="pro-block">
                    <a href="javascript:;">
                      <img class="image" :src="item.image.image" lazy="loaded">
                      <div class="cred">
                        <span class="ft12">¥</span>
                        <span class="ft17">{{item.sale_price}}</span>
                      </div>
                      <p class="ftc">{{item.little_price}}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </scroller>
        </div>
        <div class="divimg" style="width: 100%;" v-if="msg.datas">
          <a href="javascript:;" style="height: 185px;"><img name="750x370" :src="msg.datas[6].image" lazy="loaded"></a>
        </div>
        <div class="divboximg" v-if="msg.datas">
          <div class="divimg_L" v-if="msg.datas[7].content_images">
            <a href="javascript:;"><img name="376x500" :src="msg.datas[7].content_images[0][0].image" lazy="loaded"></a>
          </div>
          <div class="divimg_R" v-if="msg.datas[7].content_images">
            <a href="javascript:;" style="height: 125px;"><img name="374x250" :src="msg.datas[7].content_images[1][0].image" lazy="loaded"></a>
            <a href="javascript:;" style="height: 125px;"><img name="374x250" :src="msg.datas[7].content_images[1][1].image" lazy="loaded"></a>
          </div>
        </div>
        <div>
        </div>
      </div>

    </scroller>

  </div>
</template>

<script>
import { XHeader,Scroller,Swiper,SwiperItem,Grid,GridItem} from 'vux'
import axios from 'axios'
import Vue from "vue";
export default {

  data () {
    return {
      msg:{}
    }
  },
  components: {
    XHeader,
    Scroller,
    Swiper,
    SwiperItem,
    GridItem,
    Grid
  },
  beforeCreate(){
    },
  mounted(){
    axios.get('/api/main').then((response) => {
      this.msg = response.data
      this.$nextTick(() => {
        this.$refs.box2.style.width = this.msg.datas[5].goods.length*98.5714+20+'px';
        this.$refs.box2_scroll.reset();
         this.$refs.scroller.reset();
    }, (response) => {
      console.log('失败了')
    })
    })
  },
  activated () {
    this.$refs.scroller.reset()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
div.vux-header {
  background-color: #fff;
  padding: 0;
  position: absolute;
  z-index: 99;
  .vux-header-left,
  .vux-header-right {
    display: none;
  }
  .vux-header-title {
    height: 86px;
    margin: 0;
    line-height: 51px;
    padding: 5px 10px;
    .searchWrap {
      height: 51px;
      line-height: 51px;
      .location {
        display: inline-block;
        font-size: 14px;
        vertical-align: top;
        position: relative;
        a {
          color: #333;
        }
        margin-right: 20px;
        i {
          width: 0px;
          height: 0px;
          position: absolute;
          right: -11px;
          top: 0;
          bottom: 0;
          margin: auto;
          border-width: 4px;
          font-size: 0;
          border-style: solid solid dotted;
          border-color: #898989 transparent transparent;
        }
      }
      .search-text {
        display: inline-block;
        vertical-align: top;
        width: 220px;
        position: relative;
        input {
          height: 25px;
          width: 220px;
          border: 0;
          background: #e9e9e9;
          border-radius: 4px;
          color: #bcbcbc;
          text-indent: 10px;
          font-size: 13px;
          outline: 0;
        }
        .serach-ico {
          position: absolute;
          top: 20px;
          bottom: 0;
          margin: 0;
          width: 11px;
          height: 11px;
          right: 5px;
          background-image: url("./img/search.png");
          background-size: 11px auto;
          background-position: 0 0;
        }
      }
      .epet-category {
        display: inline-block;
        vertical-align: middle;
        line-height: 25px;
        width: 35px;
        height: 25px;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
    .find_nav {
      width: 100%;
      height: 35px;
      .box1 {
        height: 35px;
        position: relative;
        width: 160%;
      }
      .box1-item {
        width: 74.5px;
        height: 35px;
        display: inline-block;
        margin-left: 10px;
        float: left;
        text-align: center;
        line-height: 35px;
        vertical-align: top;
        color: #666560;
        &:first-child {
          color: #28aa5c;
          margin-left: 0;
        }
      }
    }
  }
}
.content {
  box-sizing: border-box;
  padding-top: 86px;
}
div.vux-slider {
  width: 100%;
  height: 160px;
  .vux-swiper {
    img {
      height: 160px;
      width: 100%;
    }
  }
}
.weui-grids {
  .weui-grid {
    padding: 5px 10px;
  }
  img {
    width: 100%;
    height: 70px;
  }
}
.surprise {
  .rela {
    height: 40px;
    width: 100%;
    padding: 10px;
    line-height: 40px;
    img {
      height: 24px;
      vertical-align: middle;
    }
    .time {
      display: inline-block;
      vertical-align: middle;
    }
    .more {
      float: right;
      margin-right: 10px;
      overflow: hidden;
      margin-top: -10px;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
  .box2 {
    .box2-item {
      width: 98.5714px;
      display: inline-block;
      img {
        width: 100%;
        height: 85px;
        margin: 0 7px;
      }
      .cred,
      .ftc {
        text-align: center;
      }
    }
  }
}
.divimg {
  img {
    height: 185px;
    width: 100%;
  }
}
.divboximg {
  overflow: hidden;
  height: 250px;
  margin-bottom: 63px;
  .divimg_L {
    float: left;
    width: 50%;
    img {
      width: 100%;
      height: 250px;
    }
  }
  .divimg_R {
    float: left;
    width: 50%;
    img {
      height: 125px;
    }
  }
}
</style>
