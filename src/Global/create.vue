<script>
import configVar from '../Global/configVar'
/**
 * 
 * 创造雪花生产工厂
 */
function SnowFactory(){

}
SnowFactory.create = function(type,parent){
    if(!SnowFactory.prototype[type]){
        throw "don't have this type"
    }
    if(SnowFactory.prototype[type].prototype.__proto__ !== SnowFactory.prototype){
        SnowFactory.prototype[type].prototype = new SnowFactory()
    }
    var newSnow = new SnowFactory.prototype[type](parent)
}
SnowFactory.prototype.init = function(ele,parent){
    var X = Math.random() * 30 + configVar.MINSNOW;
    var leftX = Math.random() * configVar.SCREENWIDTH;
    ele.style.width = X + 2 + "px"
    ele.style.height = X + 2 + "px"
    // ele.style.backgroundColor = "#fff"
    ele.style.fontSize = X + 'px'
    ele.innerText = '❉'
    ele.style.position ="absolute";
    ele.style.top = "0px";
    ele.style.left = leftX + 'px'
    ele.style.color = "#fff"
    // console.log(ele)
    // console.log(parent)
    parent.appendChild(ele)
    this.endPosition(ele)
}
SnowFactory.prototype.normalSnow = function(parent){
    // console.log(parent)
    var oDiv = document.createElement('div')
    this.init(oDiv,parent)
    this.remove(oDiv)
}
SnowFactory.prototype.remove = function(ele){
    setTimeout(()=>{
        ele.remove()
    },2000)
}
SnowFactory.prototype.endPosition = function(ele){
    var ele = ele
    function stop(){
        var offsetLeft = parseInt(ele.style.left);
        var offsetTop = parseInt(ele.style.top);
        var x = Math.random() * 3 - 1.5;
        var y = Math.random() * 5 + 5; 
        // console.log( offsetLeft + x + 'px')
        ele.style.left = offsetLeft + x + 'px'
        ele.style.top = offsetTop + y + 'px'
        window.requestAnimationFrame(stop)
   
    }
    // console.log(stop,ele)
    window.requestAnimationFrame(stop)
    
}
// SnowFactory.prototype.size
export default {
    SnowFactory
}
</script>
<style lang="scss" scoped>
    // div{
    //     position: absolute;
    //     color: #fff;
    // }
</style>
