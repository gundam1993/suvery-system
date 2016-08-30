<template>
  <div id="date-selector">
    <label>问卷截止日期:
      <div class="calenderUnit-container">
        <div class="calenderUnit"
             v-show="selectorDisplay">
          <div class="calenderUnit-header">
            <div class="leftArrow arrow"></div>
            {{year + "年" + (month + 1) + "月"}}
            <div class="rigthArrow arrow"></div>
            <div class="calenderUnit-header-days">
              <div>日</div>
              <div>一</div>
              <div>二</div>
              <div>三</div>
              <div>四</div>
              <div>五</div>
              <div>六</div>
            </div>
          </div>
          <div class="calenderUnit-body">
            <div class="calenderUnit-body-dayUnit"
                 v-for="day in daysArr"
                 :class="{thisMonth: day.getMonth() === this.month && day.getDate() >= this.today.getDate(),
                          nxtMonth: day.getMonth() > this.month}">
                  {{ day.getDate() }}   
            </div>
          </div>
        </div>
        <input type="text" class="suvery-date" 
               :value="chooseDate.getFullYear()+ '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate()"
               v-on:focus="toggleSelector()">
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        today: new Date(),
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth(),
        dayNum: "",
        daysArr: [],
        chooseDate: new Date(),
        selectorDisplay: false,
      }
    },
    ready() {
      this.dayNum = new Date(this.year,this.month+1,0).getDate();
      this.buildDaysArr();
    },
    methods: {
      buildDaysArr() {
        const day = new Date(this.year,this.month,1).getDay();
        var dayNumLast = new Date(this.year,this.month,0).getDate();
        var dayNextMo = 1;
        if (day > 0) {
          for (let i = 0; i < day; i++) {
            this.daysArr.unshift(new Date(this.year,this.month-1,dayNumLast));
            dayNumLast--;
          }
        };
        for (let j = 0; j < this.dayNum; j++) {
          this.daysArr.push(new Date(this.year,this.month,j+1));
        };
        for (var k = this.daysArr.length; k < 42; k++) {
          this.daysArr.push(new Date(this.year,this.month+1,dayNextMo));
          dayNextMo++;
        }
      },
      toggleSelector() {
        this.showSelector = !this.showSelector
      }
    }
  }
</script>

<style lang="scss" scoped>
  #date-selector {
    position: relative;
    margin-top: 1em;
    font-size: 18px;
  }
  label {
    display: block;
    .calenderUnit-container {
      display: inline-block;
      position: relative;
    }
  }
  input {
    text-indent: 0.75em;
    height: 1.5em;
    width: 14em;
    box-sizing: border-box;
    margin: 0 auto;

  }

  .calenderUnit {
    text-align: center;
    width: 16.1em;
    color: #fff;
    background-color: #111;
    margin-top: 0.5em;
    position: absolute;
    right: 0;
    bottom: 1.5em;

    .calenderUnit-header {
      height: 2em;
      line-height: 2em;
      .arrow {
        width: 0;
        height: 0;
        cursor: pointer;
        position: absolute;
        top: 0.6em;
        border-top: 0.4em solid transparent;
        border-bottom: 0.4em solid transparent;
      }
      .leftArrow {
        left: 0.5em;
        border-right: 0.8em solid #bbb;
        &:hover {
          border-right: 0.8em solid #FFF;
        }
      }
      .rigthArrow {
        right: 0.5em;
        border-left: 0.8em solid #bbb;
        &:hover {
          border-left: 0.8em solid #FFF;
        }
      }
      .calenderUnit-header-days {
        width: 16.1em;
        height: 2em;
        background-color: #111;
        cursor: default;
        div {
          height: 2em;
          width: 2.3em;
          float: left;
          text-align: center;
        }
      }
    }
    .calenderUnit-body {
      width: 100%;
      color: #fff;
      .calenderUnit-body-dayUnit {
        height: 2.3em;
        width: 2.3em;
        line-height: 2.3em;
        float: left;
        text-align: center;
        background-color: #FFF;
        cursor: default;
      }
      .thisMonth {
        color: #000;
      }
      .nxtMonth {
        color: #999;
      }
    }
  }
</style>