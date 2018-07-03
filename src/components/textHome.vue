<template>
    <div class="textWrapper">
        <div class="textItemWrapper">
            <div class="itemButton">
                <router-link :to="{path:'/'}" tag="div">page1</router-link>
                <router-link :to="{path:'/text2'}" tag="div">page2</router-link>
                <router-link :to="{path:'/text3'}" tag="div">page3</router-link>
                <router-link :to="{path:'/text4'}" tag="div">page4</router-link>

            </div>
            <div class="itemContent">
                <div class="text_1Wrapper">
                    <div class="content" ref="textItem">
                        <router-view></router-view>
                        <!-- 刚开始遇见你的时候，还仅仅是停留在喜欢。后来，我开始享受你的甜美，干净。每次看到你，都有一种精神的放松。慢慢的，我把你当成我的女神。每一天都期待能和你见面。然而每一次见面，之前鼓起对你说话的勇气都在那一刻泄的一干二净。 -->
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        current: "text_1"
      };
    }
  },
  mounted() {
    //   var str = console.log(this.$refs.textItem.children[0].innerText)
    // console.log(typeof(str))
  }
};
</script>

<style lang="scss" scoped>
.textWrapper {
  z-index: 9;
  position: absolute;
  width: 100%;
  height: 350px;
  color: #6fade1;
  bottom: 50px;
  font-size: 50px;
  text-align: center;
  .itemButton {
    margin-top: 30px;
    div {
      font-size: 25px;
      height: 40px;
      background-color: #fcc;
      border-radius: 15px;
      opacity: 0.5;
      padding: 5px;
      display: inline-block;
      &.router-link-exact-active {
        opacity: 1;
      }
    }
  }
  .itemContent {
    .text_1Wrapper {
      padding: 20px;
      .content {
        text-indent: 2em;
        text-align: left;
        font-size: 22px;
        font-weight: 500;
      }
    }
  }
}
</style>
