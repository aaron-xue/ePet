<template>
    <div class="brand">
        <scroller lock-x scrollbar-y height="-40" ref="scroller_B">
            <div class="box3">
                <ul v-if="msg.brand">
                    <li v-for="(item, index)  in msg.brand" :key="index">
                        <span >—— {{item.title}} ——</span>
                        <grid :cols="3" v-if="item.list">
                            <grid-item v-for="(item, index)  in item.list" :key="index">
                                <div class="brand_i">
                                    <img :src="item.logo" alt="">
                                    <p>{{item.name}}</p>
                                    <p>{{item.address}}</p>
                                </div>
                            </grid-item>
                        </grid>
                    </li>
                </ul>

            </div>
        </scroller>
        <a href="brand.html" class="all">全部</a>
    </div>
</template>
<script>
import { Scroller,Grid, GridItem } from 'vux'
import axios from "axios";
export default {
  components: {
        Scroller,
        Grid, GridItem
    },
    data () {
        return {
            msg:{}
        }
    },
    mounted(){
    axios.get('/api/brands').then((response) => {
                this.msg = response.data
                this.$nextTick(() => {
                this.$refs.scroller_B.reset({
                        top: 0
                    });
                }, (response) => {
                console.log('失败了')
                })
            })
    }
}
</script>
<style lang="less">
.box3{
    padding-top: 60px;
    text-align: center;
    font-size: 12px;
    color: #999;
    li{
        margin-top: 20px;
    }
    .brand_i{
        height: 107px;
        width: 122px;
        p{
            color: #999;
            padding: 5px 0;
        }
        img{
            width: 80px;
            height: 40px;
        }
    }
}
.all{
    width: 40px;
    height: 40px;
    right: 6px;
    bottom: 65px;
    position: absolute;
    z-index: 10;
    background: rgba(0,0,0,.4);
    line-height: 40px;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    text-align: center;
}
</style>