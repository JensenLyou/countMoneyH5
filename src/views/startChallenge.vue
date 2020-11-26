<template>
  <div>
    <!-- 开始游戏主页面 -->
    <div id="startChallenge">
      <!-- 你是数钱高手么？ -->
      <div class="countMoneyText1">你是数钱高手吗？</div>
      <!-- 快来体验数钱数到手抽筋的感觉吧！ -->
      <div class="countMoneyText2">快来体验数钱数到手抽筋的感觉吧！</div>
      <!-- 开始挑战 -->
      <div class="beginChallenge" @click="startChallenge"></div>
      <!-- 数钱榜 游戏规则 -->
      <div class="rankAndRegularLocation">
        <!-- 数钱榜 -->
        <div class="countMoneyRank">
          <div class="countMoneyRankText" @click="countMoneyRank">数钱榜</div>
        </div>
        <!-- 游戏规则 -->
        <div class="gameRecular">
          <div class="gameRecularText" @click="gameRegular">游戏规则</div>
        </div>
      </div>
    </div>

    <!-- 弹窗遮罩层 个人资料-->
    <div class="wrapShadow" v-show="personType">

      <!-- 关闭按钮 -->
      <div class="closeMsgBtn" @click="closePerson"></div>

      <!-- 个人资料弹窗 -->
      <div id="personMessage">
        <!-- 个人资料 -->
        <div class="personMsgText">个人资料</div>
        <!-- 表单 -->
        <div class="personForm">
          <el-form :model="form">
            <el-form-item>
              <el-input class="personName" v-model="form.name" @focus="handelHeight" autocomplete="off" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input class="personPhone" v-model="form.phone" @focus="handelHeight" autocomplete="off" placeholder="请输入手机"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="personSubmit" @click="submit(form)"></div>
            </el-form-item>
          </el-form>
        </div>
        <!-- 提示注意 -->
        <div class="personMention">个人信息将作为上链凭证依据，请认真填写哦!</div>
      </div>
    </div>

    <!-- 弹窗遮罩层 个人资料 游戏规则 -->
    <div class="wrapShadow" v-show="regularType">
      <!-- 关闭按钮 -->
      <div class="closeRegularBtn" @click="closeRegular"></div>

      <!-- 游戏规则 -->
      <div id="gameRegular">
        <!-- 游戏规则横幅 -->
        <div class="gameBanner">
          <div class="gameBannerText">游戏规则</div>
        </div>
        <!-- 规则信息 -->
        <div class="regularMsg">
          <!-- 规则 -->
          <div class="regular-label">1、需要填写真实的个人信息，我们将个人信息加密上链，返回ID哈希，可根据该哈希进行查询到相关的上链记录。</div>
          <div class="regular-label">
            2、每人有多次游戏机会，游戏记录会进行上链记录，成绩可以在数钱榜、区块链浏览器
           (<a class="regularLink" href="http://www.lll.com"  target="_blank">www.lll.com</a>)
            进行查看。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'startChallenge',
  data(){
    return{
      personType:false, //1 个人资料 2 关闭
      regularType:false, //true 游戏规则 false 关闭
      form:{
        name:'',
        phone:'',
      }
    }
  },
  created(){
  },
  methods:{
    // 开始挑战
    startChallenge(){
      console.log('personType',this.personType);
      this.personType = true;
    },
    // 关闭个人资料弹窗
    closePerson(){
      this.personType = false;
    },
    // 提交表单信息
    submit(form){
      if(form.name == null || form.name == ''){
        this.$message({
          message:'名称不能为空',
          type:'error',
          duration:'1000'
        })
      }else{
        if(form.name !== null){
          if(form.name.length < 2 || form.name.length > 10){
            this.$message({
              message:"名称需大于2个字符或小于10个字符",
              type:'error',
              duration:'1000'
            })
          }else{
            console.log('phone',form.phone);
            if(form.phone == null ||  form.phone == ''){
              this.$message.error('手机号不能为空');
            }else{
              if(form.phone !== null){
                if((/^1[3-9]\d{9}$/.test(form.phone)) === true || (/^[0][9]\d{8}$/.test(form.phone)) === true || (/^[6]([8|6])\d{5}$/.test(form.phone)) === true || (/^([6|9])\d{7}$/.test(form.phone)) === true){
                  this.$message({
                    message:'提交成功',
                    type:'success',
                    duration:'1000'
                  })
                  this.personType = false;
                  this.$router.push({path:'/countMoneyGame'});
                }else{
                  this.$message({
                    message:'请输入正确的手机号！',
                    type:'error',
                    duration:'1000'
                  });
                }
              }
            }
          }
        }
      }
    },
    // 游戏规则
    gameRegular(){
      this.regularType = true;
    },
    // 关闭规则按钮
    closeRegular(){
      this.regularType = false;
    },
    // 数钱榜跳转按钮
    countMoneyRank(){
      this.$router.push({path: "/countMoneyRank"});
    },
    // 处理高度
    handelHeight(){
      var hrt = document.documentElement.clientHeight; //获取当前可视区域的高度存到hrt变量
      window.onload = function(){ //在页面整体加载完毕时
        document.getElementById('app').style.height= hrt+'px'//把获取到的高度赋值给根div
        console.log('hrt',hrt);
      }
    }
  }
}
</script>

<style lang="less">
#startChallenge{
  position: absolute;
  width: 375px;
  height: 812px;
  max-width: 375px;
  max-height: 812px;
  background-image: url(../assets/images/startGame/bg@2x.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  z-index: 500;
  // 你是数钱高手么？
  .countMoneyText1{
    position: absolute;
    top: 63px;
    left: 38px;
    width:320px;
    height:45px;
    font-size:40px;
    font-family:Reeji-CloudYuanCu-GBK,Reeji-CloudYuanCu;
    font-weight:normal;
    color:rgba(255,255,255,1);
    line-height:45px;
    text-shadow:0px 2px 5px rgba(16,18,163,1);
    z-index: 500;
    // -webkit-background-clip:text;
    // -webkit-text-fill-color:transparent;
  }
  // 快来体验数钱数到手抽筋的感觉吧！
  .countMoneyText2{
    position: absolute;
    top: 121px;
    left: 38px;
    width:302px;
    height:68px;
    font-size:24px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:33px;
    z-index: 500;
  }
  // 开始挑战按钮
  .beginChallenge{
    position: absolute;
    top: 380px;
    left: 104px;
    width: 168px;
    height: 168px;
    background-image: url(../assets/images/startGame/icon_button@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    z-index: 500;
  }
  // 数钱榜，游戏规则位置
  .rankAndRegularLocation{
    position: absolute;
    top: 700px;
    left: 56px;
    .countMoneyRank{
      display: inline-block;
      width:122px;
      height:68px;
      background:linear-gradient(360deg,rgba(244,162,39,1) 0%,rgba(255,201,93,1) 100%);
      box-shadow:0px 2px 6px 0px rgba(101,48,47,1);
      border-radius:8px;
      margin-right: 20px;
      .countMoneyRankText{
        width:54px;
        height:25px;
        font-size:18px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:25px;
        margin-top: 22px;
        margin-left: 34px;
      }
    }
    .gameRecular{
      display: inline-block;
      width:122px;
      height:68px;
      background:linear-gradient(180deg,rgba(255,107,103,1) 0%,rgba(254,61,58,1) 100%);
      box-shadow:0px 2px 6px 0px rgba(101,48,47,1);
      border-radius:8px;
      .gameRecularText{
        width:72px;
        height:25px;
        font-size:18px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:25px;
        margin-top: 22px;
        margin-left: 25px;
      }
    }
  }
}
// 个人资料 游戏规则 遮罩层
.wrapShadow{
  position: absolute;
  width: 375px;
  height: 812px;
  background:rgba(0,0,0,0.6)!important;
  // 关闭按钮
  .closeMsgBtn{
    position: absolute;
    top:169px;
    left: 335px;
    width:24px;
    z-index: 1001;
    height:24px;
    background-image: url(../assets/images/startGame/close-circle@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;

  }
  // 个人资料盒子
  #personMessage{
    position: absolute;
    margin-top: 181px;
    width:327px;
    height:383px;
    background:linear-gradient(136deg,rgba(163,99,255,1) 0%,rgba(65,81,233,1) 100%)!important;
    border-radius:8px;
    margin-left: 24px;
    margin-top: 181px;
    z-index: 1000;
    // 个人资料文字
    .personMsgText{
      position: absolute;
      top: 33px;
      left: 119px;
      width:89px;
      height:24px;
      font-size:21px;
      font-family:Reeji-CloudYuanCu-GBK,Reeji-CloudYuanCu;
      font-weight:normal;
      color:rgba(249,249,254,1);
      line-height:24px;
      letter-spacing:1px;
    }
    // 个人资料表单
    .personForm{
      margin-top: 88px;
      .el-form-item{
        margin-bottom: 30px;
      }
      // 请输入姓名
      .personName .el-input__inner{
        width:275px;
        height:50px;
        background:rgba(255,255,255,1);
        border-radius:25px;
      }
      .personName input::-webkit-input-placeholder {
        // width:84px;
        // height:22px;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:600;
        color:rgba(105,88,242,1);
        line-height:22px;
      }
      // 请输入手机
      .personPhone .el-input__inner{
        width:275px;
        height:50px;
        background:rgba(255,255,255,1);
        border-radius:25px;
      }
      .personPhone input::-webkit-input-placeholder {
        // width:84px;
        // height:22px;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:600;
        color:rgba(105,88,242,1);
        line-height:22px;
      }
      // 提交按钮
      .personSubmit{
        position: absolute;
        left: 25px;
        width: 275px;
        height: 52px;
        background-image: url(../assets/images/startGame/person_button.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
      }
    }
    // 提交个人信息注意文字
    .personMention{
      position: absolute;
      top: 312px;
      left: 35px;
      width:265px;
      height:40px;
      font-size:14px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:20px;
      text-align: left;
    }
  }
  // 游戏规则
  #gameRegular{
    position: absolute;
    top: 223px;
    left: 46px;
    width:284px;
    height:307px;
    background:linear-gradient(136deg,rgba(163,99,255,1) 0%,rgba(65,81,233,1) 100%);
    border-radius:8px;
    z-index: 1000;
    // 规则横幅
    .gameBanner{
      position: absolute;
      top: 25px;
      left: 59px;
      width: 165px;
      height: 36px;
      background-image: url(../assets/images/startGame/regularBanner@2x.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      .gameBannerText{
        font-size:18px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(165,45,187,1);
        line-height:25px;
        margin-top: 4px;
      }
    }
    // 规则样式
    .regularMsg{
      position: absolute;
      top: 87px;
      left: 30px;
      margin-right: 30px;
      text-align: left;
      .regular-label{
        width:224px;
        height:88px;
        font-size:14px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:22px;
        margin-bottom: 12px;
      }
      .regularLink{
        color: #fff;
      }
    }
  }
  // 关闭规则按钮
  .closeRegularBtn{
    position: absolute;
    top: 210px;
    left: 314px;
    width:24px;
    z-index: 1001;
    height:24px;
    height:24px;
    background-image: url(../assets/images/startGame/close-circle@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }
}
</style>
