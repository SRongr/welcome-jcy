<template>
    <div ref="Text_3"></div>
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
        var str = configVar.STR_3
        var strArr = str.split('')
        var length = strArr.length
        // strArr.map()
        // console.log(strArr)
        var i = 0
        var nowStr = ''
        if(!this.$store.state.Text_3Over){
            var timer = setInterval(()=>{
                nowStr += strArr[i]
                if(i < length-1){
                    i++
                }else{
                    clearInterval(timer)
                    var obj = {prop:'Text_3Over',newVal:true}
                    this.setOver(obj)
                }
                // console.log(nowStr)

            this.$refs.Text_3.innerText = nowStr

            },50)
        }else{
            this.$refs.Text_3.innerText = str
        }
        
    },  
    methods:{
        ...mapMutations({setOver:'changeValue'}),
    } 
}
</script>


<style lang="scss" scoped>

</style>
