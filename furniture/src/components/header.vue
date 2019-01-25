<template>
    <div id="header">
        <div class="header_top">
            <div class="top_left fl">
                <ul class="">
                    <li><span>0500-6000000</span></li>
                    <li><span>09:00~18:00</span></li>
                </ul>
            </div>
            <div class="top_rig fr">
                <ul class="">
                    <li><a href="javascript:">登录</a></li>
                    <li><a href="javascript:">注册</a></li>
                    <li><a href="javascript:">购物车</a></li>
            </ul>
            </div>
        </div>
        <div class="header_bottom">
            <a href="index.html" class='fl'><img src="../assets/img/index/logo.png" alt=""></a>
            <div class="bottom_menu fr">
                <ul class="">
                <li><a href="javascript:;">客厅</a></li>
                <li><a href="javascript:">卧室</a></li>
                <li><a href="javascript:">餐厅</a></li>
                <li><a href="javascript:">厨房</a></li>
                <li><a href="javascript:">浴室</a></li>
                <li><a href="javascript:">关于</a></li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {

        }
        
    }
</script>
<style scoped>
@import '../assets/css/base.css';
#header{
    width: 100%;
    min-width: 1000px;
}
.header_top,.header_bottom{
    padding:0 120px;
    height:40px;
    color:#a5a5a5;
}

.header_top ul,.header_bottom ul{
    white-space: nowrap;
    width:100%;
    overflow: hidden;
}
.header_top ul li,.header_bottom ul li{
    float: left;
    white-space: nowrap;
    overflow: hidden;
    transition: all .5s;
}
/*header_top*/
.header_top{
    background-color:#f9f9f9;
    line-height:40px;
}
#header .header_top .top_rig ul li a:hover{
    color:#3B3B3B;
}
.header_top ul li{
    margin-right: 15px;
    padding-left:30px;
    background:url("../assets/img/index/icon.png") no-repeat;
    background-size:32px 220px ;
}
.header_top .top_left{
    animation:Left .8s ease-out both;
}
 .header_top .top_rig,.header_bottom ul{
     animation:Right .8s ease-out both;
 }
/*icon背景图定位 */
.header_top .top_left ul li:first-child{
    background-position: 0 2px;
}
.header_top .top_left ul li:nth-child(2){
    background-position: 0 -35px;
}
 .header_top .top_rig ul li:first-child{
    background-position: 0 -70px;
}
.header_top .top_rig ul li:nth-child(2){
    background-position: 0 -106px;
}
.header_top .top_rig ul li:last-child{
    background-position: 0 -142px;
}
/*header_bottom*/
.header_bottom{
    height:70px;
    line-height: 80px;
}
.header_bottom a img{
    width:165px;
    height:40px;
    vertical-align: middle;
}
.header_bottom ul li a{
    font-size:16px;
    padding:30px 18px;
    text-align: center;

}
.header_bottom ul li:hover{
    background-color:#FF6725;
}
.header_bottom ul li a:hover{
    color:#fff;
}
/**动画 */
@keyframes Left{
    0% {
        transform:translate(-100%)
    }
    100% {
        transform:translate(0)
    }
}
@keyframes Right{
    0% {
        transform:translate(200%)
    }
    100% {
        transform:translate(0)
    }
}
.header_top .top_left,.header_bottom>a{
    animation:Left 1.2s ease-out both;
}
 .header_top .top_rig,.header_bottom ul{
     animation:Right 1.2s ease-out both;
}

</style>