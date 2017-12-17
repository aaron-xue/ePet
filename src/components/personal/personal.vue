<template>
    <div class="presonal">
        <div class="login_bg">
            <div class="presonal_header">
                <a class="topbar-title">注册</a>
            </div>
            <img src="./img/logo.png" alt="">
            <tab :line-width=0 defaultColor='#fff' active-color='#fff'>
                <tab-item selected @on-item-click="onItemClick">普通登录
                    <i style='display:block;'></i>
                </tab-item>
                <tab-item @on-item-click="onItemClick">手机动态密码登录
                    <i></i>
                </tab-item>
            </tab>
        </div>
        <div class="login_form">
            <group label-width="333px" label-align="left">
                <x-input title="title" v-model="value" type='text'></x-input>
                <x-input title="title" v-model="value" type='password'></x-input>
            </group>

        </div>
    </div>
</template>
<script>
import { Tab, TabItem,Group,XInput} from 'vux'
var i;
export default {
  components: {
    Tab,
    TabItem,
    Group,
    XInput 
  },
  methods:{
      onItemClick(index){
          if (i) {
              for (let a = 0; a < i.length; a++) {
                  i[a].style.display = a==index? 'block':'none';
              }
          }
      }
  },
  mounted(){
      i = window.document.querySelectorAll('.presonal .vux-tab-item i');
  }
}
</script>
<style lang="less">
.presonal_header {
  color: #fff;
  text-align: right;
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-bottom: 1px solid #999;
  a {
    margin-right: 20px;
  }
}
.login_bg {
  height: 177.875px;
  width: 100%;
  background-image: url("./img/2ac7b0a4f0ab1e4a63819e0668d1cb39.png");
  background-position: 0% 0%;
  background-size: 100%;
  text-align: center;
  img {
    width: 75px;
    margin: 12px 0 24px 0;
  }
  .vux-tab {
    background-color: rgba(255, 255, 255, 0.3);
    .vux-tab-item {
      position: relative;
      i {
        position: absolute;
        display: none;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        bottom: 0px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}
.login_form{
    padding: 0 20px;
}
</style>


