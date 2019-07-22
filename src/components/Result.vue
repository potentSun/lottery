<template>
  <div class="Result">
    <p class="clearfix">
      <span>第2019191期&nbsp;&nbsp;</span>
      <span class="time">07-17 20:00</span> 停售
    </p>
    <div class="details" >
      <div class="list" v-if="randomlotteryNum">
        直选自选：
        <span class="num" >{{randomlotteryNum}}</span>
      </div>
      <div class="list" v-else v-for="(item, index) in param" :key=index>
        直选自选：
        <span class="num" >{{param[index]}}</span>
      </div>
    </div>
    <div class="plan">
      <p>方案注数：{{planNum}}</p>
      <p>方案倍数：{{planMultiple}}</p>
    </div>
    <div class="btmNav">
      <span class="money"><span style="color: #2c3e50">方案金额: </span>{{money}} 元</span>
      <span class="choosed" @click="_copy(message)">复制</span>
    </div>
    <textarea id="copycode" class="main-code" v-show="false">1231232;</textarea>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      randomlotteryNum: null,
      lotteryNum: null,
      planNum: 1,
      planMultiple: 1,
      money: 2,
      param: null,
      message: '1213232'
    };
  },
  created() {
    if (this.$route.query.currentRandom) {
      this.randomlotteryNum = this.$route.query.currentRandom;
    } else {
      let data = this.$route.query;
      this.param = data.chooseNum;
      this.planNum = data.rankLength;
      this.planMultiple = data.multipleNum;
      this.money = data.money;
    }
  },
  methods: {
    _copy(obj) {
      console.log("copy");
    }
  }
};
</script>

<style lang="less" scoped>
body {
    background: #eee;
}
.Result {
  .clearfix {
    font-size: 12px;
    text-align: left;
    line-height: 35px;
    height: 36px;
    margin: 0 10px;
    span {
      color: #999;
    }
    .time {
      color: #e74c3c;
    }
  }
  .btmNav {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    line-height: 30px;
    padding: 10px 0;
    box-shadow: 1px -1px 2px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.97);
    .money {
      color: #e74c3c;
      float: left;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      margin: 0 12px;
    }
    .choosed {
      width: 100px;
      height: 35px;
      line-height: 35px;
      border: 1px solid #007bed;
      border-radius: 4px;
      color: #007bed;
      text-align: center;
      background: #fff;
      font-size: 14px;
      display: block;
      float: right;
      margin: 0 12px;
    }
  }
  .details {
    background: #fff;
    text-align: left;
    width: 96%;
    margin-left: 2%;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #e0e0e0;
    .list {
      height: 45px;
      line-height: 44px;
      padding: 0 5px;
      border-bottom: 1px solid #e0e0e0;
      .num {
        color: #e74c3c;
      }
    }
  }
  .plan {
    text-align: left;
    margin: 0 10px;
    font-size: 14px;
    padding-bottom: 57px;
  }
}
</style>