<template>
    <!-- 游戏开始玩的界面 -->
    <div id="running">
        <!-- <div class="running-text">
            <img src="../assets/images/moneyGame/rtext1.png" alt="">
            <img src="../assets/images/moneyGame/rtext2.png" alt="" class="hide">
            <img src="../assets/images/moneyGame/rtext3.png" alt="" class="hide">
        </div> -->
        <div class="downTime">
            <span>{{tt}}</span>
        </div>
        <ul class="score-time">
            <li>0</li>
            <li>0</li>
            <li>0</li>
        </ul>
        <div class="money">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <img src="../assets/images/moneyGame/money@2x.png" alt="">
            <div></div>
        </div>
        <img src="../assets/images/moneyGame/rhand.png" alt="" class="running-hand">
    </div>
</template>

<script>
// import "../../public/js/index.js"
export default {
    
    data(){
        return{ 
            tt:null,
            moneyTotal:0,
        }
    },
    created(){
        var zIndex = 50000;
        var startY = 0;
        var time = 2;
        var money = 0;
        var ismt = false;
        var isExit = false;
        var maxMoney = 22;
        var rank = 11;
        var currenImgId = 1;
        this.tt = time;
        console.log('到这了',$("body"),$('.money div'));
        $("body").on('touchstart','.money div',function(event) {
            // console.log('你碰到我了');
            startY = event.originalEvent.changedTouches[0].clientY;
        });
        var that = this;
        $("body").on('touchend', '.money div',function(event) {
            var offsetY = event.originalEvent.changedTouches[0].clientY - startY;
            if (offsetY < -30) {
                zIndex -= 14;
                var ingCount = $('.money img').length;
                $('.running-hand').hide();
                $('.money img').eq(ingCount-currenImgId).addClass('anim');
                var imgSrc = $('.money img')[0].src;
                var imgStr = "<img src='" + imgSrc +"' alt=''>"
                var neWImg = $(imgStr);
                $('.money').prepend(neWImg);
                currenImgId++;
                ismt = true;
                //计时器
                if (ismt && !isExit) {
                    isExit = true;
                    var tId = setInterval(function() {
                        if (time < 0) {
                            clearInterval(tId);
                            // clearInterval(runTid);
                            // $('.resilt-money').html('￥' + money * 100);
                            // $('#running').hide();
                            // $('#result').show();
                            $('.score-time li').eq(2).html(0);
                            $('.score-time li').eq(1).html(0);
                            $('.score-time li').eq(0).html(0);
                            // that.jump();
                            that.$router.push({path:'/upLinkRecord',query:{money:that.moneyTotal,count:1}});
                            var dataObj = {
                                name: $('.username').val(),
                                phone: $('.phone').val(),
                                score: money
                            };
                            // 调用接口
                            // $.ajax({
                            // 	url: 'register.php',
                            // 	type: "POST",
                            // 	data: dataObj,
                            // 	dataType: 'json',
                            // 	success: function(data) {
                            // 		console.log(data);
                            // 		$('.max-money').html(parseInt(data.score) * 100);
                            // 		$('.rank').html(parseInt(data.rank));
                            // 	}
                            // });
                        }
                        that.tt = parseInt(time / 10) != 0 ? time : '0' + time;
                        $('.downTime span').html(time);
                        console.log('tt',that.tt);
                        time--;
                    }, 1000);
                }
                money++;
                that.moneyTotal = money;
                $('.score-time li').eq(2).html(money % 100 % 10);
                $('.score-time li').eq(1).html(parseInt(money % 100 / 10));
                $('.score-time li').eq(0).html(parseInt(money / 100));
            }
        });
    },
    methods:{
        jump(){
            this.$router.push({path:'/upLinkRecord',query:{money:this.moneyTotal,count:1}});
        }
    }
}
</script>

<style lang="less">
/*running 界面*/
#running{
    position: absolute;
  	width: 375px;
  	height: 100%;
    background-image: url(../assets/images/startGame/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 10000;
}
.downTime{
    position: absolute;
    top: 57px;
    left: 295px;
    background-image: url(../assets/images/moneyGame/icon_time.png);
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    text-align: center;
}
.downTime span{
    position: relative;
    top: 18px;
    margin-left: 2px;
    font-size:21px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,80,45,1);
    line-height:29px;
    letter-spacing:1px;
}
.running-text{
	position: relative;
	margin: 1.4rem 0 0.46rem;
}
.running-text img{
	position: absolute;
	left: 0.64rem;
	width: 5.17rem;
}
.score-time{
    position: absolute;
    top: 470px;
    left: 103px;
	// margin: 3.59rem auto 0;
    font-size:36px;
    font-family:Arial-BoldMT,Arial;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:42px;
    letter-spacing:3px;
}
.score-time span{
    position: absolute;
    left: -35px;
}
.score-time li{
	display: inline-block;
	margin-right: 42px;
	color: #fff;
}
.score-time li:nth-child(1){
	margin-right:50px;
}
.score-time li:nth-child(2){
	margin-right:50px;
}
.score-time li:last-child{
    margin-right: 0px;
}
.money{
	position: absolute;
	margin: 1.09rem 0 0;
    transform-style: preserve-3d;
    top: 10px;
    left: 15px;
     -webkit-transform-style: preserve-3d;
    
}
.money>img{
    position: absolute;
	// z-index: 500;
	left:0.97rem;
    width: 272px;
    opacity: 0;
}
.money div{
	position: absolute;
	// z-index: 100000;
	left:0.97rem;
	// width: 4.52rem; 
    width: 272px;
	height: 11rem;
	background: rgba(44,44,44,0);
}
.running-hand{
	position: absolute;
	// z-index: 1000;
	left:4.2rem;
	top:7.7rem;
	width: 2.03rem;
	animation: runHandMove 1.5s infinite;
}
@keyframes runHandMove{
	from{
		opacity: 1;
		display: inline-block;
		transform: translateY(0rem);
	}
	to{
		opacity: 0;
		transform: translateY(-1.5rem);
		display: none;
	}
}
.bottom{
	position: absolute;
	// z-index: 200000;
	bottom:0;
	width: 6.46rem;
}
.anim{
	animation:move 1s infinite;
	-webkit-animation:move 1.3s infinite;
	animation-iteration-count:1;
	animation-fill-mode: forwards;
}
@-webkit-keyframes move{
	0%{
		transform: translateY(0px) scale(1);
		opacity: 1;
	}
	100%{
		transform: translateY(-7.81rem) scale(0.1);
		opacity: 0;
	}
}
</style>