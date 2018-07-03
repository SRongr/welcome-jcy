import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        topClass:false,         //控制首屏翻页
        snowStart:false,        //控制开始下雪
        Text_1Over:false,       //判断是否读完
        Text_2Over:false,
        Text_3Over:false,
        Text_4Over:false,


    },
    mutations:{     //改变判断值，第二个参数填对象可以找到那个值并且修改为新值
        changeValue(state,{prop,newVal}){
            // console.log(prop,newVal)
            state[prop] = newVal
        }
    },
    actions:{

    },

})