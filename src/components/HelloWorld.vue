<template>
  <div class="threeD">
    <div>
      <p class="top">
        <a href="javascript:void(0);" class="topTit">5月26日起加奖，共300万</a>
      </p>
      <div class="chartkj">
        <ul class="largeShow" v-show="showType">
          <li>
            第 2019171 期开奖：
            <span class="fontred">6 6 1 试机：2 0 4 1机1球</span>
          </li>
          <li>
            第 2019172 期开奖：
            <span class="fontred">4 1 6 试机：7 0 0 1机1球</span>
          </li>
          <li>
            第 2019173 期开奖：
            <span class="fontred">8 4 6 试机：0 7 3 1机1球</span>
          </li>
          <li>
            第 2019174 期开奖：
            <span class="fontred">8 4 8 试机：5 8 7 1机1球</span>
          </li>
          <li>
            第 2019175 期开奖：
            <span class="fontred">4 6 4 试机：7 4 1 1机1球</span>
          </li>
          <li>
            第 2019176 期开奖：
            <span class="fontred">5 0 1 试机：0 2 4 1机1球</span>
          </li>
          <li>
            第 2019177 期开奖：
            <span class="fontred">0 6 1 试机：6 9 8 1机1球</span>
          </li>
        </ul>
        <p class="kjShow">
          第 2019190 期开奖：
          <span class="fontred">4 6 4 试机：8 4 1 1机1球</span>
          <img
            src="../assets/down.png"
            alt
            class="arrow"
            @click="showType = !showType"
            v-if="!showType"
          />
          <img src="../assets/up.png" alt class="arrow" @click="showType = !showType" v-else />
        </p>
      </div>
    </div>
    <div class="details">
      <p class="clearfix">
        <span>第2019191期&nbsp;&nbsp;</span>
        <span class="time">07-17 20:00</span> 停售
      </p>
      <div class="chooseAll">
        <div v-if="currentChooseNum < 1">
          每位至少选择
          <strong class="chooseNum">1</strong>个
        </div>
        <div v-else>
          <span>
            已经选择
            <strong class="chooseNum">{{currentChooseNum}}</strong>个
          </span>&nbsp;&nbsp;
          <a class="chooseDelete" href="javascript:void(0);" @click="_allClear">全清</a>
        </div>
      </div>
      <div class="ballbox3Dbox" v-for="(item, index) in ballboxData" :key="index">
        <b class="fontred2">{{item.name}}：</b>
        <div class="ballbox">
          <div
            class="ballList"
            v-for="(val, k) in item.param"
            :key="k"
            @click="_currentCheck(item, val)"
          >
            <span class="numBall" :class="{ 'activeBall': val.checked}">{{val.num}}</span>
            <p>{{val.sign}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btmNav">
      <span class="multiple" @click="_multipleDialog" v-if="customizeType">{{multipleNum}}倍</span>
      <input
        type="number"
        class="multiple"
        v-else
        placeholder="请输入倍数"
        v-model="multipleNum"
        @blur="_customizeNum"
      />
      <span class="money" v-if="rankLength > 0">{{multipleNum * rankLength * 2}} 元</span>
      <span class="money" v-else>0 元</span>
      <span class="choosed" @click="_submitData">选好了</span>
    </div>
    <div v-show="multipleShow" class="multipleNav">
      <span class="tit">倍数设置</span>
      <div class="multipleList">
        <div
          class="list"
          @click="_currentMul(item, index)"
          :class="{ multipleSign:index == current}"
          v-for="(item, index) in diologData"
          :key="item.key"
        >{{item.value}}</div>
      </div>
    </div>
    <van-overlay :show="overlay" @click="_overlay" />
  </div>
</template>

<script>
export default {
  name: "threeD",
  data() {
    return {
      showType: false,
      currentChooseNum: 0,
      multipleShow: false,
      overlay: false,
      multipleNum: 1,
      rankLength: 0,
      customizeNum: 1,
      customizeType: true,
      current: 0,
      // 3Dbox数据
      ballboxData: [
        {
          name: "百位",
          param: [
            {
              num: 0,
              sign: "11"
            },
            {
              num: 1,
              sign: "11"
            },
            {
              num: 2,
              sign: "11"
            },
            {
              num: 3,
              sign: "11"
            },
            {
              num: 4,
              sign: "11"
            },
            {
              num: 5,
              sign: "11"
            },
            {
              num: 6,
              sign: "11"
            },
            {
              num: 7,
              sign: "11"
            },
            {
              num: 8,
              sign: "11"
            },
            {
              num: 9,
              sign: "11"
            }
          ]
        },
        {
          name: "十位",
          param: [
            {
              num: 0,
              sign: "11"
            },
            {
              num: 1,
              sign: "11"
            },
            {
              num: 2,
              sign: "11"
            },
            {
              num: 3,
              sign: "11"
            },
            {
              num: 4,
              sign: "11"
            },
            {
              num: 5,
              sign: "11"
            },
            {
              num: 6,
              sign: "11"
            },
            {
              num: 7,
              sign: "11"
            },
            {
              num: 8,
              sign: "11"
            },
            {
              num: 9,
              sign: "11"
            }
          ]
        },
        {
          name: "个位",
          param: [
            {
              num: 0,
              sign: "11"
            },
            {
              num: 1,
              sign: "11"
            },
            {
              num: 2,
              sign: "11"
            },
            {
              num: 3,
              sign: "11"
            },
            {
              num: 4,
              sign: "11"
            },
            {
              num: 5,
              sign: "11"
            },
            {
              num: 6,
              sign: "11"
            },
            {
              num: 7,
              sign: "11"
            },
            {
              num: 8,
              sign: "11"
            },
            {
              num: 9,
              sign: "11"
            }
          ]
        }
      ],
      // 弹框
      diologData: [
        {
          key: 1,
          value: "1倍"
        },
        {
          key: 2,
          value: "2倍"
        },
        {
          key: 3,
          value: "3倍"
        },
        {
          key: 5,
          value: "5倍"
        },
        {
          key: 10,
          value: "10倍"
        },
        {
          key: 0,
          value: "输入倍数"
        }
      ],
      // 排列
      currentCombination: [[], [], []],
      resultsRank: [],
      resultRank: []
    };
  },
  created() {
    this._getBoxData();
  },
  methods: {
    _getBoxData() {
      this.ballboxData.map(item => {
        item.param.map(data => {
          this.$set(data, "checked", false);
        });
      });
    },
    _currentCheck(item, val) {
      val.checked = !val.checked;
      if (val.checked) {
        this.currentChooseNum++;
      } else {
        this.currentChooseNum--;
      }
      if (item.name == "百位") {
        let hundredArr = [];
        item.param.forEach(element => {
          if (element.checked) {
            hundredArr.push(element.num);
          }
        });
        this.currentCombination[0] = hundredArr;
      } else if (item.name == "十位") {
        let tenArr = [];
        item.param.forEach(element => {
          if (element.checked) {
            tenArr.push(element.num);
          }
        });
        this.currentCombination[1] = tenArr;
      } else {
        let onesArr = [];
        item.param.forEach(element => {
          if (element.checked) {
            onesArr.push(element.num);
          }
        });
        this.currentCombination[2] = onesArr;
      }
      let hundred = this.currentCombination[0].length;
      let ten = this.currentCombination[1].length;
      let one = this.currentCombination[2].length;
      if (hundred > 0 && ten > 0 && one > 0) {
        this._arrRank(this.currentCombination);
      } else {
        this.resultRank = [];
        this.resultsRank = [];
      }
    },
    _multipleDialog() {
      this.multipleShow = true;
      this.overlay = true;
    },
    _overlay() {
      this.multipleShow = false;
      this.overlay = false;
    },
    _currentMul(item, index) {
      this.multipleShow = false;
      this.overlay = false;
      this.current = index;
      if (item.key == 0) {
        this.customizeType = false;
        this.multipleNum = 1;
      } else {
        this.customizeType = true;
        this.multipleNum = item.key;
      }
    },
    _allClear() {
      this.rankLength = 0;
      this.resultRank = [];
      this.resultsRank = [];
      this.currentChooseNum = 0;
      this.currentCombination = [[], [], []];
      this.ballboxData.map(item => {
        item.param.map(data => {
          this.$set(data, "checked", false);
        });
      });
    },
    _customizeNum() {
      if (!this.multipleNum) {
        this.multipleNum = 1;
      }
    },
    _submitData() {
      let hundred = this.currentCombination[0].length;
      let ten = this.currentCombination[1].length;
      let one = this.currentCombination[2].length;
      if (hundred == 0 || ten == 0 || one == 0) {
        this._randomDialog();
      } else {
        let allMoney = this.multipleNum * this.rankLength * 2
        this.$router.push({
          name: 'Result', 
          query: {
            chooseNum: this.resultsRank,
            rankLength: this.rankLength,
            multipleNum: this.multipleNum,
            money: allMoney
          }
        })
      }
    },
    _randomDialog() {
      this.$dialog
        .confirm({
          title: "号码为空",
          message: "您没选号，我们帮您生成一注随机号码。"
        })
        .then(() => {
          let currentRandom = "";
          for (let i = 0; i < 3; i++) {
            let randomNum = parseInt(10 * Math.random());
            currentRandom = randomNum + currentRandom;
          }
          this.$router.push({
            name: 'Result', 
            query: { 
              currentRandom: currentRandom
            }
          })
        })
        .catch(() => {});
    },
    //递归
    _recursionArrRank(arr, depth) {
      for (var i = 0; i < arr[depth].length; i++) {
        this.resultRank[depth] = arr[depth][i];
        if (depth != arr.length - 1) {
          this._recursionArrRank(arr, depth + 1);
        } else {
          this.resultsRank.push(this.resultRank.join(""));
        }
      }
    },
    _arrRank(arr) {
      this.resultRank = [];
      this.resultsRank = [];
      this._recursionArrRank(arr, 0);
      this.rankLength = this.resultsRank.length;
      console.log(this.resultsRank.length, this.resultsRank.join(","));
    }
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
.threeD {
  .top {
    font-size: 12px;
    text-align: center;
    margin: 10px;
    .topTit {
      color: #e74c3c;
      text-decoration: none;
    }
  }
  .chartkj {
    border-left: 0 none;
    background-color: #f8f9f9;
    font-size: 12px;
    text-align: left;
    .largeShow {
      list-style: none;
      li {
        height: 36px;
        padding: 0 10px;
        line-height: 35px;
        text-align: left;
        border-bottom: 1px solid #f5f5f5;
      }
    }
    .kjShow {
      padding: 0 10px;
      position: relative;
      height: 36px;
      line-height: 35px;
      margin: 0;
      .arrow {
        position: absolute;
        right: 15px;
        top: 10px;
      }
    }
    .fontred {
      color: #e74c3c;
    }
  }
  .details {
    .clearfix {
      font-size: 12px;
      border-bottom: 1px solid #f5f5f5;
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
    .chooseAll {
      font-size: 14px;
      height: 36px;
      line-height: 35px;
      text-align: left;
      margin: 10px;
      .chooseNum {
        color: #e74c3c;
      }
      .chooseDelete {
        color: #007bed;
        text-decoration: underline;
      }
    }
    .ballbox3Dbox {
      border-bottom: 1px dashed #ddd;
      display: flex;
      &:last-child {
        border-bottom: none;
        padding-bottom: 57px;
      }
      .fontred2 {
        color: #e74c3c;
        line-height: 40px;
        text-indent: 8px;
        width: 55px;
        font-size: 14px;
      }
      .ballbox {
        padding-top: 8px;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .ballList {
          font-size: 12px;
          color: #ccc;
          width: 52px;
          text-align: center;
          .numBall {
            border: 1px solid #e74c3c;
            color: #e74c3c;
            display: inline-block;
            width: 34px;
            height: 34px;
            line-height: 34px;
            border-radius: 34px;
          }
          p {
            margin: 5px;
          }
        }
      }
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
    .multiple {
      display: block;
      width: 66px;
      height: 35px;
      line-height: 35px;
      border: 1px solid #cfcfcf;
      border-radius: 4px;
      text-align: center;
      background: #fff;
      color: #999;
      margin: 0 12px;
      float: left;
      font-size: 14px;
    }
    .money {
      color: #e74c3c;
      float: left;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
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
  .multipleNav {
    height: 215px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background: #fff;
    font-size: 15px;
    .tit {
      text-align: left;
      padding: 0 10px;
      height: 45px;
      line-height: 44px;
      display: block;
    }
    .multipleList {
      border-top: 1px solid #cfcfcf;
      padding-left: 5%;
      padding-top: 10px;
      .list {
        width: 45%;
        display: block;
        float: left;
        height: 36px;
        line-height: 36px;
        margin: 0 12px 12px 0;
        border: 1px solid #cfcfcf;
        border-radius: 5px;
        color: #999;
      }
    }
  }
  .multipleSign {
    color: #007bed !important;
    border-color: #007bed !important;
  }
  .activeBall {
    background: #e74c3c !important;
    color: #fff !important;
  }
}
</style>
