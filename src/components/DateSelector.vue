<template>
  <div id="date-selector">
    <div class="date-selector-container">
      <label>问卷截止日期:
        <input type="text" class="suvery-date" 
               :value="chooseDate.getFullYear()+ '-' + (chooseDate.getMonth() + 1) + '-' + chooseDate.getDate()"
               @click="toggleSelector()">
      </label>
      <div class="calenderUnit-container">
        <div class="calenderUnit"
             v-show="selectorDisplay"
             transition="calender-pop">
          <div class="calenderUnit-header">
            <div class="leftArrow arrow"
                 v-if="month > (new Date()).getMonth() || year > (new Date()).getFullYear()"
                 @click="monthMinus()"></div>
            <div class="leftArrow-unable arrow"
                 v-if="month === (new Date()).getMonth() &&  year === (new Date()).getFullYear()"></div>
            {{year + "年" + (month + 1) + "月"}}
            <div class="rigthArrow arrow"
                 @click="monthPlus()"></div>
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
                 transition="month-change"
                 v-for="day in daysArr"
                 :class="{thisMonth: day.getMonth() === this.month && day.getDate() >= this.today.getDate(),
                          nxtMonth: day.getMonth() > this.month || day.getFullYear() > this.year, 
                          chooseDay: day.toDateString() === this.chooseDate.toDateString()}"
                 @click.stop="chooseDay(day)">
                  {{ day.getDate() }}   
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="date-selector-mask"
         v-if="selectorDisplay"
         transition="mask"
         @click="toggleSelector()">
    </div>
  </div>
</template>

<script>
  import { setEndDate } from '../vuex/actions';
  import { getActiveSuvery } from '../vuex/getters';

  export default {
    vuex: {
      actions: {
        setEndDate,
      },
      getters: {
        activeSuvery: getActiveSuvery,
      }
    },
    data() {
      return {
        today: new Date(),
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth(),
        daysArr: [],
        chooseDate: new Date(),
        selectorDisplay: false,
      }
    },
    ready() {
      if (this.activeSuvery.endDate) {
        this.chooseDate = new Date(this.activeSuvery.endDate);
      }
      this.year = this.chooseDate.getFullYear();
        this.month = this.chooseDate.getMonth();
      this.buildDaysArr(this.year, this.month);
    },
    methods: {
      buildDaysArr(year, month) {
        var dayNum = new Date(year,month+1,0).getDate();
        this.daysArr = [];
        const day = new Date(year,month,1).getDay();
        var dayNumLast = new Date(year,month,0).getDate();
        var dayNextMo = 1;
        if (day > 0) {
          for (let i = 0; i < day; i++) {
            this.daysArr.unshift(new Date(year,month-1,dayNumLast));
            dayNumLast--;
          }
        };
        for (let j = 0; j < dayNum; j++) {
          this.daysArr.push(new Date(year,month,j+1));
        };
        for (var k = this.daysArr.length; k < 42; k++) {
          this.daysArr.push(new Date(year,month+1,dayNextMo));
          dayNextMo++;
        }
      },
      toggleSelector() {
        this.selectorDisplay = !this.selectorDisplay;
      },
      monthPlus() {
        if (this.month < 11) { 
          this.month ++ ;
        }else {
          this.year ++;
          this.month = 0;
        }
        this.buildDaysArr(this.year, this.month);
      },
      monthMinus() {
        if (this.month > 0) {
          this.month --;
        }else{
          this.year --;
          this.month = 11;
        }
        this.buildDaysArr(this.year, this.month);
      },
      chooseDay(day) {
        if (day.getMonth() === this.month) {
          this.chooseDate = day;
          this.selectorDisplay = false;
        }else if(day.getFullYear() === this.year && day.getMonth() < this.month) {
            return false;
        }else{
          this.monthPlus();
          this.chooseDate = day;
        }
        this.setEndDate(day);
      },
    }
  }
</script>

<style lang="scss" scoped>
  #date-selector {
    position: relative;
    margin-top: 1em;
    font-size: 18px;
    .date-selector-container {
      display: inline-block;
      position: relative
    }
  }
  label {
    display: block;
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
    bottom: 1.7em;
    z-index: 100;

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
      .leftArrow-unable {
        left: 0.5em;
        border-right: 0.8em solid #bbb;
        cursor: default;
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
      height: 13.8em;
      color: #fff;
      background-color: #fff;
      overflow: hidden;
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
        &:hover {
          background-color: #c0e3ea;
          cursor: pointer
        }
      }
      .nxtMonth {
        color: #999;
        &:hover {
          background-color: #c0e3ea;
          cursor: pointer
        }
      }
      .chooseDay {
          background-color: #c0e3ea;
      }
    }
  }

  .month-change-transition {
    transition: all .3s ease-in-out;
  }
  
  .month-change-enter, .month-change-leave {
    transform: translate(100%,0);
    opacity: 0;
  }

  .mask-enter, .mask-leave {
    opacity: 0;
  }
  .mask-transition {
    transition: all .3s ease;
  }
  .calender-pop-enter, .calender-pop-leave {
    transform: translate(0, 100%);
    opacity: 0;
  }
  .calender-pop-transition {
    transition: all .3s ease;
  }
  .date-selector-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
</style>