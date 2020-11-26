<template>
  <div id="countMoneyRand">
    <!-- 数钱榜文本 -->
    <div class="countMoneyText">数钱榜</div>
    <!-- 榜单 -->
    <div class="whiteRank">
      <el-table
        :data="tableData" 
        class="rankTable" 
        :header-cell-style="{color:'rgba(40,40,40,0.6)','font-size':'14px','font-family':'PingFangSC-Regular,PingFang SC','font-weight':'500'}"
        :row-style="{color:'rgba(40,40,40,0.6)','font-size':'14px','font-family':'PingFangSC-Regular,PingFang SC','font-weight':'500','overflow':'hidden','text-overflow':'ellipsis','white-space':'nowrap'}"
        v-el-table-infinite-scroll="load" 
        v-loading="loaidng" height="97%">
        <el-table-column
          prop="rank"
          label="名次"
          align="center"
          width="48">
        </el-table-column>
        <el-table-column
          label="ID哈希"
          align="left" width="115">
          <template slot-scope="scope">
            <div class="IdHashText">
              <el-link :underline="false" href="https://www.baidu.com" target="_blank">{{scope.row.handleHash}}</el-link>
            </div>
            <div class="copyIcon" @click="copyToClip(scope.row.IdHash)"></div>
          </template>
        </el-table-column>
        <el-table-column
          prop="count"
          label="数钱次数"
          align="center" width="80">
        </el-table-column>
        <el-table-column
          label="时间"
          align="right">
          <template slot-scope="scope">
            <div class="timeText">{{scope.row.time}}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tableData:[
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          },
          {
            rank:1,
            IdHash:'12345612345678910',
            count:58,
            time:'2020/12/12'
          }
        ],
        loaidng:false
      }
    },
    created(){
      this.getsubstr();
    },
    methods:{
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
      load() {
        this.loading = true;
        setTimeout(() => {
          this.tableData = this.tableData.concat(this.tableData);
          this.loading = false
          // this.$message.success('加载成功！');
        }, 500)
      }
    }
  }
</script>

<style lang="less" scoped>
#countMoneyRand{
  position: absolute;
  width:375px;
  height:100%;
  background-image: url(../assets/images/countMoney/bg@2x.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  // 数钱榜文本
  .countMoneyText{
    position: absolute;
    top: 57px;
    left: 146px;
    width:84px;
    height:40px;
    font-size:28px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(249,249,254,1);
    line-height:40px;
  }
  // 数钱榜卡片
  .whiteRank{
    position: absolute;
    top: 122px;
    left: 14px;
    width:347px;
    height:80%;
    background:rgba(255,255,255,1);
    border-radius:8px;
  }
  // 表格
  .rankTable{
    position: absolute;
    top: 16px;
    left: 0px;
    width: 347px;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    border-radius:8px;
    .timeText{
      position: absolute;
      top: 12px;
      right: 7px;
    }
    .IdHashText{
      display: inline-block;
      width:92px;
      height:20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .el-link.el-link--default{
      position: absolute;
      top: 15px;
      left: -5px;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(144,205,255,1);
      line-height:20px;
    }
    .el-table_1_column_4.is-leaf{
      text-align: right;
    }
    .el-table_1_column_2{
      position: absolute;
      padding: 0px;
    }
    .copyIcon{
      position: absolute;
      top: 15px;
      left: 95px;
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url(../assets/images/countMoney/icon_copy.png);
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
    }
  }
}
</style>