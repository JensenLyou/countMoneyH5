<template>
  <div id="upLink">
      <!-- 恭喜你已获得 -->
      <div class="gain">恭喜你已获得</div>
      <!-- 金额 -->
      <div class="gainMoney">￥{{money}}</div>
      <!-- 当前排名 -->
      <div class="currentRankLocation">
          <!-- 当前排名 -->
          <div class="currentRank">当前排名：</div>
          <!-- 第几名 -->
          <div class="rank">第1名</div>
          <!-- 查看 -->
          <el-button type="text" class="viewBtn" v-on:click="viewCountMoneyRank">查看</el-button>
      </div>
      <!-- 再来一次 -->
      <div class="onceAgain">
          <div class="onceAgainText" @click="onceAgain()">再来一次</div>
      </div>
      <!-- ID哈希 -->
      <div class="idHashLocation">
          <!-- 值 -->
          <div class="idHashText">ID哈希: {{idHash}}</div>
          <!-- 复制按钮 -->
          <div class="idHashCopyBtn" @click="copyToClip(idHash)"></div>
      </div>
      <!-- 白色卡片 -->
      <div class="whiteCardLocation">
          <!-- 上链记录 -->
          <div class="uplinkText">上链记录</div>
          <!-- 列表位置 -->
          <div v-infinite-scroll="laod"  class="tableLocation">
                <div class="tableValue" v-for="item in tableData">
                    <!-- Tx -->
                    <div class="Tx inline">Tx：</div>
                    <!-- 哈希值 -->
                    <div class="hashValue inline">{{item.hash}}</div>
                    <!-- 复制按钮 -->
                    <div class="txCopyBtn inline" @click="copyToClip(item.hash)"></div>
                    <!-- 时间 -->
                    <div class="txTime inline">{{item.time}}</div>
                    <el-divider class="recordLine"></el-divider>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    inject:['reload'], 
    data(){
        return{
            tableData: [
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
                {
                    hash:'123456...123456',
                    time:'2020/12/12 12:00:00'
                },
            ],
            idHash:'58ece289awec...cd7ea774iecizhjk',
            money:0,
            count:1
        }
    },
    created(){
        this.money=this.$route.query.money;
        this.count = this.$route.query.count;
        console.log('count',this.$route.query.count)
        this.money = this.money * 100;
    },
    methods:{
        // 处理哈希值显示
        getsubstr(){
            var hash1 = '';
            var hash2 = '';
            var hash = '';
            for(let index=0 ; index<this.tableData.length ; index++){
            hash1 = this.tableData[index].IdHash.substr(0,5);
            hash2 = this.tableData[index].IdHash.substr(this.tableData[index].length-5,5);
            this.tableData[index].handleHash = hash1 + '...' + hash2;
            }
            console.log('table',this.tableData);
        },
        // 复制
        copyToClip(content) {
            var aux = document.createElement("input"); 
            aux.setAttribute("value", content); 
            document.body.appendChild(aux); 
            aux.select();
            document.execCommand("copy"); 
            document.body.removeChild(aux);
            if(document.execCommand('copy') == true){
            this.$message.success("复制成功!");
            }
        },
        // 加载
        laod(){
            console.log('load');
            this.tableData = this.tableData.concat(this.tableData);
        },
        // 跳转到数钱榜
        viewCountMoneyRank(){
            this.$router.push({path:'/countMoneyRank'});
        },
        // 再来一次
        onceAgain(){
            console.log('dian')
            this.$router.push({path:'/'});
        }
    }
}
</script>

<style lang="less">
#upLink{
    position: absolute;
    width: 375px;
    height: 812px;
    background-image: url(../assets/images/countMoney/bg@2x.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    // 行内样式
    .inline{
        display: inline-block;
    }
    // 恭喜你获得
    .gain{
        position: absolute;
        top: 67px;
        left: 80px;
        font-size:36px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(249,249,254,1);
        line-height:50px;
    }
    // 金钱文本
    .gainMoney{
        position: absolute;
        top: 137px;
        // left: 115px;
        margin-left: 131px;
        font-size:34px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(249,249,254,1);
        line-height:29px;
    }
    // 当前排名位置
    .currentRankLocation{
        position: absolute;
        top: 225px;
        left: 105px;
        .currentRank{
            display: inline-block;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(249, 249, 254, 0.9);
            line-height:20px;
        }
        .rank{
            display: inline-block;
            font-size:18px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(249,249,254,0.9);
            line-height:20px;
            margin-right: 10px;
        }
        .viewBtn{
            position: absolute;
            top: -1px;
            width:36px;
            padding-top: 4px;
            height:22px;
            border-radius:4px;
            border:1px solid rgba(255,255,255,0.9);
            span{
                color: rgba(249,249,254,0.8);
            }
        }
    }
    // 再来一次按钮
    .onceAgain{
        position: absolute;
        top: 274px;
        left: 125px;
        width:126px;
        height:36px;
        background:linear-gradient(360deg,rgba(255,153,0,1) 0%,rgba(255,184,42,1) 100%);
        border-radius:22px;
        // 再来一次文本
        .onceAgainText{
            position: relative;
            top: 7px;
            left: 31px;
            width:64px;
            height:22px;
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(249,249,254,0.8);
            line-height:22px;
        }
    }
    // 复制ID哈希位置
    .idHashLocation{
        position: absolute;
        top: 356px;
        left: 14px;
        .idHashText{
            display: inline-block;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
        }
        .idHashCopyBtn{
            position: absolute;
            margin-left: 10px;
            display: inline-block;
            width: 20px;
            height: 20px;
            background-image: url(../assets/images/countMoney/icon_copy.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position-x: center;
            background-position-y: center;
        }
    }
    // 白色卡片位置
    .whiteCardLocation{
        position: absolute;
        top: 389px;
        left: 14px;
        width:347px;
        height:384px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        .uplinkText{
            position: absolute;
            top: 26px;
            left: 142px;
            width:64px;
            height:22px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(40,40,40,1);
            line-height:22px;
        }
        .tableLocation{
            position: absolute;
            top: 72px;
            left: 12px;
            height: 300px;
            overflow: auto;
            .space{
                margin-bottom: 5px;
            }
            .Tx{
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(40,40,40,1);
                line-height:20px;
            }
            .hashValue{
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(144, 205, 255, 1);
                line-height:20px;
            }
            .txCopyBtn{
                position: absolute;
                left: 151px;
                width: 20px;
                height: 20px;
                background-image: url(../assets/images/countMoney/icon_copy.png);
                background-size: cover;
                background-repeat: no-repeat;
                background-position-x: center;
                background-position-y: center;
            }
            .txTime{
                margin-left: 50px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(40,40,40,0.6);
                line-height:20px;
            }
            .recordLine{
                width:323px;
                height:1px;
                margin-top: 11px;
                margin-bottom: 13px;
            }
        }
    }
}
</style>