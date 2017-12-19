<template>
    <div class="brands">
        <x-header>
            <span class='title' slot="default">全部品牌</span>
            <a slot="right">
                <span class="mla"></span>
            </a>
        </x-header>
        <scroller lock-x scrollbar-y height="-40" ref="scroller" @on-scroll="onScroll">
            <div class="box">
                <ul v-if="msg.brand" class="brand-list" id="content">
                    <li v-for="(item, index)  in msg.brand" :key="index" class="item" :id="`item${index}`">
                        <h2 class="item_letter">{{item.order}}</h2>
                        <ul class="brands_class" v-if="item.list">
                            <li v-for="(item, index)  in item.list" :key="index">
                                <div class="brand-wrapper">
                                    <img :src="item.logo" alt="">
                                    <div class="brand-name">
                                        <p>{{item.name}}</p>
                                        <p>{{item.address}}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </scroller>
        <div class="l-wrapper">
            <div class="l-cell" v-if="msg.brand" id="menu">
                <span class="letter" v-for="(item, index)  in msg.brand" :key="index" :name="`#item${index}`">{{item.order}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { XHeader,Scroller  } from 'vux'
import axios from "axios";
import $ from "jquery";
export default {
    data () {
        return {
            msg:{}
        }
    },
    components: {
        XHeader,
        Scroller 
    },
    methods:{
        onScroll(position){
            var scrollTop = $(document).scrollTop();
            var contentItems = $("#content").find(".item");
            var currentItem = "";
            contentItems.each(function(){
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if(scrollTop > offsetTop-200){
                    currentItem = "#" + contentItem.attr("id");
                }
            });
            if (currentItem != $("#menu").find(".current").attr("name")) {
                $("#menu").find(".current").removeClass("current");
                $("#menu").find("span[name='" + currentItem + "']").addClass("current");
            }
        }
    },
    mounted(){
        axios.get('/api/allbrand').then((response) => {
        this.msg = response.data
        this.$nextTick(() => {
            this.$refs.scroller.reset();
            $("#menu").find("span:first-of-type").addClass("current");
            var that = this;
            $(".l-cell").on("click","span", function () {
                var index = $(".l-cell span").index($(this));
                that.$refs.scroller.reset({
                    top: $(".brand-list h2").eq(index).offset().top-40
                })
                $(this).siblings().removeClass("current").end().addClass("current");
            });
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
<style lang="less" scoped>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.brands {
  background-color: #f4f4f4;
  width: 100%;
  .vux-header {
    background-color: #fff;
    .title {
      color: #333;
    }
    .mla {
      display: inline-block;
      background-image: url("./img/imgtk-new.png");
      background-size: 17px 18px;
      height: 18px;
      width: 17px;
    }
  }
  .box {
    h2 {
      background-color: rgba(255, 255, 255, 0);
      line-height: 24px;
      width: 100%;
      padding-left: 10px;
    }
    .brands_class {
      background-color: #fff;
      .brand-wrapper {
        width: 100%;
        height: 73px;
        padding: 10px;
        margin-right: 20px;
        border-bottom: 1px solid rgb(243, 244, 245);
        line-height: 73px;
        img {
          width: 100.5px;
        }
        .brand-name {
          display: inline-block;
          height: 41px;
          margin-left: 20px;
          p:first-of-type {
            height: 22px;
            font-size: 14px;
            color: #333;
          }
          p:last-of-type {
            height: 19px;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
  .l-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 13px;
    .l-cell {
      display: inline-block;
      width: 100%;
      margin-top: 150px;
      line-height: 14px;
      span {
        display: block;
        color: #666;
        font-size: 12px;
      }
      .current{
          color: red;
      }
    }
  }
}
</style>


