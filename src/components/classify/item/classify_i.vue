<template>
    <div class="classify_i">
        <scroller lock-x scrollbar-y height="200px" ref="scroller">
            <div class="box2">
                <ul v-if="msg.categorys" ref="categorys">
                    <li v-for="(item, index) in msg.categorys" :key="index">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </scroller>
    </div>
</template>
<script>
    import { Scroller } from 'vux'
    import axios from "axios";

export default {
    components: {
        Scroller,
    },
    data () {
        return {
            msg:{}
        }
    },
    mounted(){
        axios.get('/api/classlist').then((response) => {
        this.msg = response.data
        this.$nextTick(() => {
        
        }, (response) => {
        console.log('失败了')
        })
    })
    }
  
}
</script>
<style lang="less">

</style>