<template>
    <div id="main">
<!--banner-->
        <div class='banner'>
            <ul>
                <li v-for='(value,index) of pic' :class='li_style' @mouseenter='enter()' @mouseleave='leave()' :key='index'><img :src="value" /></li>
            </ul>
            <div @click='handlePrev()'><img src="../assets/img/index/carousel/prev.png" alt="" /></div>		
            <div @click='handleNext()'><img src="../assets/img/index/carousel/next.png" alt="" /></div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                arr:['b1','b2','b3','b4','b5'],
                timer:null,
                li_style:'',
                pic:[]
            }
        },
        created(){
            this.pic=[
                    "../assets/img/index/carousel/banner1.jpg",
                    "../assets/img/index/carousel/banner2.jpg",
                    "../assets/img/index/carousel/banner3.jpg",
                    "../assets/img/index/carousel/banner4.jpg",
                    "../assets/img/index/carousel/banner5.jpg"],
        }
        mounted:{
            this.timer=setInterval(function(){
                this.handleNext();
            },3000)
        },
        methods:{
            handlePrev(){
                this.arr.unshift(this.arr[this.pic.length-1]);
                this.arr.pop();
                for(var i=0;i<this.pic.length;i++){
                    this.li_style=this.arr[i]
                }
            },
            handleNext(){
                this.arr.push(this.arr[0]);
                this.arr.unshift();
                for(var i=0;i<this.pic.length;i++){
                    this.li_style=this.arr[i]
                }
            },
            enter(){
                clearInterval(this.timer)
            },
            leave(){
                this.timer=setInterval(function(){
                    this.handleNext();
            },3000)

            }
        }
    }
</script>
<style scoped>
    /*banner*/
.banner{
    width:100%;
    height: 700px;
    padding-top:10px;
    margin:0 auto;
    position:relative;
    background:url('../assets/img/index/carousel/bg.jpg');
    background-size: cover;
    overflow: hidden;
}
.banner ul{
    width:1300px;
    height:700px;
    margin:0 auto;
}
 .banner ul li{
     position:absolute;
     width:100%;
 }
 .banner ul li img{
    width:80%;
    height:600px;
}
.banner ul li:after{
    display: block;
    content: '';
    clear: both;
}
.banner div img{
    position:absolute;
    width:64px;
    height:64px;
    top:295px;
    opacity:.5;
}
.banner div:nth-child(2) img{
    left:50px;
}
.banner div:last-child img{
    right:50px;
}
.b1{
	transform:translate3d(-100%,0,0) scale(0.7);
	opacity:0;
}
.b2{
	transform:translate3d(-60%,0,0) scale(0.7);
	opacity:0.7;
	z-index:2;
}
.b3{
	transform:translate3d(0%,0,0) scale(1);
	z-index:3
}

.b4{
	transform:translate3d(50%,0,0) scale(0.7);
	opacity:0.7;
	z-index:2;
}
.b5{
	transform:translate3d(100%,0,0) scale(0.7);
	opacity:0;
}
</style>