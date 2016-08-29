<template>
  <div id="date-selector">
    <label>问卷截止日期:
      <div class="calenderUnit-container">
        <div class="calenderUnit">
          <div class="calenderUnit-header">
            <div class="leftArrow arrow"></div>
            {{year + "年" + month + "月" }}
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
            
          </div>
        </div>
        <input type="text" class="suvery-date" value="">
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth() + 1,
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
    height: 1.2em;
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
  }
</style>