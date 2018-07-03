<template>
    <div class="snowWrapper" ref="snowWrapper">
        <photoGroiup></photoGroiup>
        <!-- <transition name="show"> -->
            <div class="black" :class="{showUrl}"></div>
            <div class="bgImg" ></div>
        <!-- </transition> -->
        <textHome></textHome>
    </div>
</template>

<script>
import SnowFactory from "../Global/create";
import configVar from "./../Global/configVar";
import photoGroiup from "./photoGroup";
import textHome from "./textHome";
import Vue from "vue";
export default {
  props: {
    show: {
      type: Boolean
    }
  },
  components: {
    photoGroiup,
    textHome
  },
  data() {
    return {
      showUrl: false
    };
  },
  created() {
    Vue.nextTick(() => {
      setTimeout(() => {
        this.showUrl = true;
        this.init();
      }, 1500);
    });
  },
  methods: {
    init() {
      // console.log(SnowFactory);
      var parent = this.$refs.snowWrapper;
      const timer = setInterval(() => {
        var newSnow = SnowFactory.SnowFactory.create("normalSnow", parent);
      }, configVar.NEWONE);
      //   },00)
      //   setTimeout(function(){
      //       clearInterval(timer)
        // },5000)
    }
  }
};
</script>

<style lang="scss" scoped>
.snowWrapper {
  //   opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .black {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    z-index: 10;
    transition: all 1s;
    &.showUrl {
      opacity: 0;
      z-index: 0;
      transition: all 4s;
    }
  }
  .bgImg {
    width: 100%;
    height: 100%;
    background: url("../assets/3.jpg") 50% 50% /100% 100% no-repeat;
  }
}
</style>
