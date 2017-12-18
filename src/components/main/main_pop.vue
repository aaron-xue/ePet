<template>
    <div class="main_pop" ref="main_pop">
        <div class="pop_wrap">
            <p class="">{{msg[1].en_name}}
            </p>
            <p class="">▁</p>
            <p class="">亲爱的小主</p>
            <p class="">您即将进入
                <span>{{msg[1].ch_name}}</span>
            </p>
            <p class="current-line c000 ft12">▁</p>
            <ul class="clearfix ftc change-ul">
                <li type="cat" class="pet1" @click="changeL"><img :src="msg[0].logo">
                    <p class="pet1name">{{msg[0].ch_name}}</p>
                </li>
                <li type="dog" class="fl pet2 mainpet rela dog"><img :src="msg[1].logo">
                    <p :style="{color:msg[1].color}">{{msg[1].ch_name}}</p>
                </li>
                <li type="fish" class="fl pet3 fish" @click="changeR"><img :src="msg[2].logo">
                    <p class="pet3name">{{msg[2].ch_name}}</p>
                </li>
            </ul>
            <p>
                <a href="javascript:;" class="once-into">立即进入</a>
            </p>
        </div>
        <a href="javascript:;" class="cartc-close" @click="close">
            <img src="./img/close2.png">
        </a>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg:[
                {
                    en_name:'CAT',
                    ch_name:'猫猫站',
                    logo:require('./img/change-cat.png'),
                    color:'#e74186'
                },
                {
                    en_name:'DOG',
                    ch_name:'狗狗站',
                    logo:require('./img/change-dog1.png'),
                    color:'#4e9a36'
                },
                {
                    en_name:'FISH',
                    ch_name:'水族站',
                    logo:require('./img/change-fish.png'),
                    color:'#039ddf'
                }
            ]
        }
    },
    methods:{
        changeL(){
            let tem1 = this.msg[0];
            let tem2 = this.msg[1];
            this.msg.splice(0,1,tem2);
            this.msg.splice(1,1,tem1);
        },
        changeR(){
            let tem1 = this.msg[1];
            let tem2 = this.msg[2];
            this.msg.splice(1,1,tem2);
            this.msg.splice(2,1,tem1);
        },
        close(){
            this.$refs.main_pop.style.transform = 'scale(.01,.01)'
        }
    }
}
</script>
<style lang="less">
.main_pop {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: all .4s linear 0s;
  transform: scale(.01,.01);
  .pop_wrap {
    position: absolute;
    top: 107.5px;
    left: 0;
    width: 100%;
    p {
      text-align: center;
      color: #999;
      margin-top: 20px;
    }
    ul {
      text-align: center;
      margin-top: 30px;
      li {
        display: inline-block;
        p {
          margin-top: 5px;
        }
      }
      .pet1,
      .pet3 {
        width: 84px;
        height: 88px;
        text-align: center;
        img {
          width: 59px;
          height: 65px;
        }
      }
      .pet2 {
        width: 135px;
        height: 188px;
        text-align: center;
        img {
          width: 108px;
          height: 110px;
        }
      }
    }
    .once-into {
      background: #039ddf;
      border-radius: 30px;
      padding: 3px 15px;
      margin-top: 25px;
      font-size: 12px;
      color: #fff;
    }
  }
  .cartc-close {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgb(231, 231, 231);
    text-align: center;
    line-height: 40px;
    img {
      width: 23px;
      height: 23px;
      vertical-align: middle;
    }
  }
}
@keyframes nnh {
  0% {
    background-position: 1px;
  }
  100% {
    background-position: -81px;
  }
}
</style>


