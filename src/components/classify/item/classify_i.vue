<template>
    <div class="classify_i">
        <scroller lock-x scrollbar-y height="-40" ref="scroller_L" :scrollbarY=false>
            <div class="box2">
                <tab v-if="msg.categorys" ref="categorys" class="categorys" :animate=false>
                    <tab-item v-for="(item, index) in msg.categorys" :key="index" :selected="index === 0" @on-item-click="onItemClick(index)">
                        {{item.name}}
                    </tab-item>
                </tab>
            </div>
        </scroller>
        <scroller lock-x scrollbar-y height="-40" ref="scroller_R">
            <div class="box1">
                <div class="goods_R">
                    <a href="javascript:;">
                        狗狗玩具
                        <img src="../img/cate_right_img.png" class="arrowL"></a>
                    <grid :cols="3" v-if="goods.cate_list">
                        <grid-item v-for="(item, index)  in goods.cate_list[0].list" :key="index">
                            <div class="good">
                                <img :src="item.photo" alt="">
                                <span>{{item.name}}</span>
                            </div>
                        </grid-item>
                    </grid>
                </div>
                <div class="brands" v-if="goods.cate_list">
                    <a href="javascript:;">
                        热门品牌
                    </a>
                    <grid :cols="2" v-if="goods.cate_list[1]">
                        <grid-item v-for="(item, index)  in goods.cate_list[1].list" :key="index">
                            <div class="brand">
                                <img :src="item.logo" alt="">
                                <span>{{item.name}}</span>
                            </div>
                        </grid-item>
                    </grid>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    import { Scroller,Tab,TabItem,Grid, GridItem } from 'vux'
    import axios from "axios";
    var flag = false; //是否正在请求
export default {
    components: {
        Scroller,
        Tab,
        TabItem,
        Grid, GridItem
    },
    methods:{
        onItemClick (index) {
            if (!flag) {
                flag = !flag;
                if (index==0) {
                axios.get('/api/commend').then((response) => {
                this.goods = response.data
                flag = !flag;
                this.$nextTick(() => {
                this.$refs.scroller_R.reset({
                        top: 0
                    });
                }, (response) => {
                console.log('失败了')
                })
            })
                .catch(function() {
                        flag = !flag;
                })
                }else{
                    axios.get('/api/goods').then((response) => {
                    this.goods = response.data
                     flag = !flag;
                    this.$nextTick(() => {
                    this.$refs.scroller_R.reset({
                            top: 0
                        });
                    }, (response) => {
                            console.log('失败了')
                        })
                    })
                    .catch(function() {
                         flag = !flag;
                    })

                }
            }
        },
    },
    data () {
        return {
            msg:{},
            goods:{}
        }
    },
    mounted(){
        axios.get('/api/classlist').then((response) => {
            this.msg = response.data
            this.$nextTick(() => {
            this.$refs.scroller_L.reset({
                    top: 0
                });
            this.$refs.scroller_R.reset({
                    top: 0
                });
            }, (response) => {
            console.log('失败了')
            })
        })
        axios.get('/api/commend').then((response) => {
            this.goods = response.data
            this.$nextTick(() => {
            this.$refs.scroller_R.reset({
                    top: 0
                });
            }, (response) => {
            console.log('失败了')
            })
        })
    },
  activated () {
    this.$refs.scrollerL.reset()
    this.$refs.scrollerR.reset()
  }
    
  
}
</script>
<style lang="less">
.categorys.vux-tab {
  display: block;
  width: 70px;
  height: auto;
  .vux-tab-item {
    width: 70px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    flex-grow: 0;
    flex-shrink: 0;
    vertical-align: middle;
  }
}
.classify_i {
  div:first-of-type {
    float: left;
    width: 70px;
  }
  div:last-of-type {
    width: 305px;
  }
  .box2,
  .box1 {
    padding-top: 50px;
  }
  .box2 {
    width: 70px;
    div:first-of-type {
      float: none;
    }
  }
  .box1 {
    padding-left: 10px;
    padding-right: 10px;
    .goods_R {
      width: 100%;
      height: auto;
      float: none;
      div:last-of-type {
        float: none;
      }
      a {
        text-align: left;
        font-size: 12px;
        color: #999;
        .arrowL {
          height: 12px;
          float: right;
          margin-right: 20px;
        }
      }
      .good {
        width: 100%;
        height: 95px;
        img {
          width: 100%;
        }
        text-align: center;
      }
    }
    .brands {
      div:last-of-type {
        float: none;
      }
      a {
        text-align: left;
        font-size: 12px;
        color: #999;
      }
      .brand {
        width: 100%;
        height: 97px;
        img {
          width: 100%;
        }
        text-align: center;
      }
    }
  }
}
</style>