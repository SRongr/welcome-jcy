<template>
    <div class="Text_4Wrapper">
    <div ref="Text_4"></div>

    <img src="./../../assets/me.jpg" alt=""/>
    </div>
    
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
        var str = configVar.STR_4
        var strArr = str.split('')
        var length = strArr.length
        // strArr.map()
        // console.log(strArr)
        var i = 0
        var nowStr = ''
        if(!this.$store.state.Text_4Over){
            var timer = setInterval(()=>{
                nowStr += strArr[i]
                if(i < length-1){
                    i++
                }else{
                    clearInterval(timer)
                    var obj = {prop:'Text_4Over',newVal:true}
                    this.setOver(obj)
                }
                // console.log(nowStr)

            this.$refs.Text_4.innerText = nowStr

            },50)
        }else{
            this.$refs.Text_4.innerText = str
        }
        
    },  
    methods:{
        ...mapMutations({setOver:'changeValue'}),
    }
}
</script>


<style lang="scss" scoped>
img{
    position: absolute;
    opacity: 0.6;
    bottom: 0px;
    width: 50px;
    height: 80px;
    right: 20px;
}
</style>
