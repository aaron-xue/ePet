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
        <div class="login_form form" style='display:block;'>
            <group label-align="left">
                <x-input type='text' placeholder="手机号/邮箱/用户名">
                    <img slot="label" style="padding-right:10px;display:block;" src="./img/ico3.png" width="24" height="24">
                </x-input>
                <x-input type='password' placeholder="输入密码">
                    <img slot="label" style="padding-right:10px;display:block;" src="./img/ico4.png" width="24" height="24">
                </x-input>
            </group>
        </div>
        <div class="loginByPhone_form form">
            <group label-align="left">
                <x-input type='tel' placeholder="已注册的手机号">
                    <img slot="label" style="padding-right:10px;display:block;" src="./img/ico1.png" width="24" height="24">
                </x-input>
                <x-input class="weui-cell_vcode" placeholder="请输入图片内容">
                    <img slot="label" style="padding-right:10px;display:block;" src="./img/ico3.png" width="24" height="24">
                    <img slot="right" class="weui-vcode-img" src="https://wap.epet.com/share/seccode.html?hash=0.39891681107821575&height=30&width=85" @click="changeVcode">
                </x-input>
                <x-input placeholder="动态密码" class="weui-vcode">
                    <img slot="label" style="padding-right:10px;display:block;" src="./img/ico4.png" width="24" height="24">
                    <x-button slot="right" type="primary" mini>获取动态密码</x-button>
                </x-input>
            </group>
        </div>
        <div class="ftc">
            <a href="javascript:;" class="btn-register">忘记密码？</a>
            <div class="clear"></div>
        </div>
        <div style="padding:10px 20px 0 20px;">
            <x-button slot="right" type="primary" class="login_bt">登录</x-button>
        </div>
        <div class="other-login">
            <p>
                <b>合作网站登录</b>
            </p>
            <ul class="uList1">
                <li>
                    <a href="javascript:;"><img src="./img/login_ico2.png"></a>
                </li>
                <li>
                    <a href="javascript:;"><img src="./img/login_ico4.png"></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Tab, TabItem,Group,XInput,XButton} from 'vux'
var i,form;
export default {
  components: {
    Tab,
    TabItem,
    Group,
    XInput,
    XButton

  },
  methods:{
      onItemClick(index){
          if (i&& form) {
              for (let a = 0; a < i.length; a++) {
                  i[a].style.display = a==index? 'block':'none';
                  form[a].style.display = a==index? 'block':'none';
              }
          }
      },
      changeVcode(ev){
          console.log( ev.target);
          ev.target.src=`https://wap.epet.com/share/seccode.html?hash=${Math.random(0,1)}&height=30&width=85`;
      }
  },
  mounted(){
      i = window.document.querySelectorAll('.presonal .vux-tab-item i');
      form = window.document.querySelectorAll('.presonal .form');
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
.form {
  display: none;
  padding: 0 20px;
}
.loginByPhone_form {
  img.weui-vcode-img {
    width: 112px;
    margin-right: 16px;
  }
}
.ftc {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px 0px 20px;
  text-align: right;
  a {
    color: #898989;
  }
}
.other-login{
    width: 100%;
    height: 114px;
    position: absolute;
    bottom: 61px;
    p{
        text-align: center;
    }
    .uList1{
        height: 94px;
        padding: 18px 0;
        box-sizing: border-box;
        li{
            float: left;
            width: 124.875px;
            padding: 0 14.4px;
            box-sizing: border-box;
            text-align: center;
            img{
                width: 57.6563px;
            }
        }
    }
}
</style>


