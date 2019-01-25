<template>
    <footer>
        <div class='info cf'>
            <ul>
                <li><h3>关于我们</h3></li>
                <li><a href="JavaScript:;">品牌介绍</a></li>
                <li><a href="JavaScript:;">加盟方式</a></li>
                <li><a href="JavaScript:;">联系我们</a></li>
            </ul>
            <ul>
                <li><h3>在线服务</h3></li>
                <li><a href="javascript:;">退换政策</a></li>
                <li><a href="javascript:;">退换流程</a></li>
                <li><a href="javascript:;">在线客服</a></li>
            </ul>
            <ul>
                <li><h3>支付方式</h3></li>
                <li><a href="javascript:;">在线支付</a></li>
                <li><a href="javascript:;">银行转账</a></li>
                <li><a href="javascript:;">货到付款</a></li>
            </ul>
            <ul>
                <li><h3>关注我们</h3></li>
                <li><img src="../assets/img/index/erweicode.jpg" alt=""></li>
                <li>官方微信</li>
            </ul>
            <ul>
                <li><img src="../assets/img/index/logo.png" alt=""></li>
            </ul>
        </div>
        <p>Copyright © 2010-2018 家居商城. All rights reserved.</p>
        <div><a href="#"><img src="../assets/img/index/goTop.png" alt=""></a> </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
footer{
    width:100%;
    background:#f2f2f2;
    padding:50px 120px 20px 120px;
    min-width:1000px;
    color:#666;
    position:relative;
}
footer .info {
    display:flex;
    justify-content:space-around;
    margin-bottom:15px;

}
footer .info ul{
    float:left;
    white-space:nowrap;
    margin-left:90px;

}
footer .info ul li{
    margin-bottom:10px;
    font-size:14px;
    text-align:left;
}
footer .info ul li a:hover{
    color:#5d5d5d;
}
footer .info ul li h3{
    color:#666;
    font-size:16px;
    margin-bottom:20px;
}
footer .info ul:nth-child(4) li:nth-child(2) img{
    width:100px;
    height:100px;  
}
footer .info ul:nth-child(4) li{
    margin-bottom:4px;
    text-align:center;
}
footer .info ul:nth-child(4) li:last-child{
    background:url('../assets/img/index/icon.png') no-repeat;
    background-size:32px 220px;
    background-position:0 -186px;
    padding-left:15px;
    margin-top:-5px;
}
footer .info ul:last-child li img{
    width:154px;
    height:33px;
}
footer .info ul:last-child{
        line-height:150px;
}
footer>div:last-child{
    position:fixed;
    top:737px;
    right:70px;
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#fff;
    text-align:center;
    line-height:50px;
}

</style>