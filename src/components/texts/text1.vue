<template>
    <!-- <div class="text_1Wrapper">
        <div class="content"> -->
            <div class="Wrarpper">
                <router-link ref="routeTo" tag="span" to="/text2"></router-link>
                <div ref="Text_1">
                </div>
            </div>
            
            
        <!-- </div>
    </div> -->
</template>
<script>
import configVar from '../../Global/configVar.vue'
import {mapMutations} from 'vuex';
export default {
    data(){
        return {
            configVar
        }
    },
    mounted(){
                    // console.log(this.$router,$route)
        
        var str = configVar.STR_1
        var strArr = str.split('')
        var length = strArr.length
        // strArr.map()
        // console.log(strArr)
        var i = 0
        var nowStr = ''
        // console.log(this.$store.state.Text_1Over)
        if(!this.$store.state.Text_1Over){      //判断是否已经读过并读完
            // console.log(1)
            var outTimer = setTimeout(()=>{             //第一个打开 由于页面的渐进效果，等2.5秒运行
                var timer = setInterval(()=>{
                nowStr += strArr[i]
                if(i < length-1){
                    i++
                }else{
                    clearInterval(timer)
                    clearTimeout(outTimer)
                    var obj = {prop:'Text_1Over',newVal:true}
                    this.setOver(obj)
                    // console.log(this.$refs)
                    this.$refs.routeTo.$emit('onclick')
                }
                // console.log(nowStr)
                this.$refs.Text_1.innerText = nowStr

                },50)           //50秒写一个字
            },2500)
        }else{
                this.$refs.Text_1.innerText = str       //如果已经写完过，直接展示全部

        }
        
       

    },
    methods:{
        ...mapMutations({setOver:'changeValue'}),           //定义修改store 方法
        // ...mapMutations({changeTopClass: 'changeValue'}),
        // setClick(){
        //     this.$refs.route
        // }
    },
    // beforeRouteEnter(to,from,next){
    //     setTimeout(()=>{
    //         next('./text2')
    //     },15000)
    // }
    
}
</script>
<style lang="scss" scoped>
    // .text_1Wrapper{
    //     padding: 20px;
    //     .content{
    //         text-indent:2em;
    //         text-align: left;
    //         font-size: 22px
    //     }
    // }
</style>
