<template>
  <div id="app" ref="music">
    <div v-if="$store.state.snowStart">
      <snow :show="$store.state.snowStart"></snow>
    </div>
    <div class="top" :class="{none : $store.state.topClass}">
      <marquee  behavior="slide" direction="up" scrollamount="20">      
我找不到勇气直接告诉你
I couldn't find the courage to tell you.

所以...
So, please...

...请让我展示
...let me show you.
        </marquee>

    </div>
    <div class="musicControl" v-on:click="this.change">change music state</div>
    <!--end box-->
    <!--start text-->
    <!-- <div id="text"></div> -->
    <!--end text-->
    <!-- <embed src="music.mp3" hidden="true" /> -->
    <!-- <audio src="./music/music.mp3" autoplay/> -->

	<!-- <audio src="music.mp3"  /> -->
  </div>
</template>


<script>
import Vue from "vue";
import snow from "./components/snow";
import configVar from "./Global/configVar";
import craete from "./Global/create";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      // topClass : false,
      // snowStart : false
    };
  },
  components: {
    snow
  },
  created() {
    // console.log(vm)
    // <embed src="music.mp3" hidden="true" />

    this.a = new Audio("../static/music.mp3");
    // a.src =
    var self = this;
    window.onload = function() {
      // console.log(a,a.src);
      Vue.nextTick(() => {
        // document.body.appendChild(a);
        // self.a.autoplay = true;
        // self.a.pause()
        self.a.loop = true 
        self.a.volume = 0.5;
       
        self.init();

    
      });
    };
  },
  methods: {
    ...mapMutations({ changeTopClass: "changeValue" }), //声明改变变量方法
    change(){
      console.log(1546)
      if(this.a.paused){
        this.a.play()
      }else{
        this.a.pause()

      }
    },
    init() {
      //进入页面
      setTimeout(() => {
        this.topClass = true;
        console.log(this.a.paused)
        if(this.a.paused){
          this.a.play()
        }
        // this.a.play()
        // console.log(this.$store.state)
        // console.log(this)
        var topClassObj = { prop: "topClass", newVal: true };

        this.changeTopClass(topClassObj);
        // console.log(this.$store.state)
        // console.log(5000);
        // console.log(configVar)
      }, 5000); //5000             //五秒之后首页消失
      setTimeout(() => {
        //一秒之后下雪页面打开
        // this.snowStart = true;
        var snowStartObj = { prop: "snowStart", newVal: true };
        this.changeTopClass(snowStartObj);
         if(this.a.paused){
          this.a.play()
        }
        // console.log(this);
      }, 7000); //6000
    }
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  .top {
    font-size: 20px;
    width: 100%;
    height: 500px;
    color: #ffffff;
    &.none {
      font-size: 20px;
      width: 100%;
      height: 500px;
      color: transparent;
      // opacity: 0;
      transition: all 2s;
    }
    marquee {
      // height: 500px;
      display: block;
      text-align: center;
      padding-top:40px;
      white-space: pre-wrap;
      position: absolute;
      top: 20%;
      // transform: translate(0,-50%);
      bottom: 0px;
    }
  }
  .musicControl{
    position: absolute;
    bottom: 0px;
    font-size: 12px;
    color: #fff;
  }
}
</style>
