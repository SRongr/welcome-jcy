<template>
    <div class="photoGrounp">
       <div class="box">
		<div class="pic">
			<ul v-if="configVal" ref="ul">
				<li>
					<img src="./../assets/xinjcy_3.png"/>
				</li>
				<li>
					<img src="./../assets/1.png"/>
				</li>
				<li>
					<img src="./../assets/xinjcy_2.png"/>
				</li>
				<li>
					<img src="./../assets/4.png"/>
				</li>
				<li>
					<img src="./../assets/xinjcy_1.png"/>

				</li>
				<li>
					<img src="./../assets/5.png"/>

				</li>
			</ul>
		</div>
	</div>
    </div>
</template>
<script>
import configVal from '../Global/configVar'
export default {
    data(){
        return {
			configVal
        }
    },
    mounted(){
        this.animate()
    },
    methods:{
        animate(){
			// console.log(configVal.IMAGEARR[0])
            var listArrObj = this.$refs.ul.children
            var listArr = [].slice.call(listArrObj)
            var length = listArr.length;
            listArr.map((item,index)=>{				//对每一个图片做旋转处理
                item.style.transform=`rotateY(${(360/length)*index}deg) translateZ(180px)`
            })
       }
    },
}
</script>

<style lang="scss" scoped>
	@keyframes play {
		from {
			transform: rotateY(0deg);
			}
		to {
			transform: rotateY(360deg);
			}
		}
    .box {  
        position: absolute;
        top: 10vh;
        left: 50%;
        transform: (-50%);
        margin: auto;
        perspective: 800px;
			/*景深*/
        .pic {
			position: relative;
			transform-style: preserve-3d;
			/*3d环境*/
			animation: play 10s linear infinite;
			/*动画名称 执行时间 匀速 无限执行*/
            li {
                list-style: none;
                position: absolute;
                top: 0;
                left: 0;
             
                img{
                    height: 200px;
                    width: 200px;
                }
		    }
		}
	}

		

		
</style>
