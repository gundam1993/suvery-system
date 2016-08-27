<template>
  <div class="container">
    <input 
      type="text" 
      id="title" 
      class="user-input" 
      placeholder="这里是标题" 
      autocomplete="off" 
      :value="suvery.title">
    <hr>
    <question-build :suverys="suvery"></question-build>
    <div id="add-question">
      <div 
        id="question-type" 
        v-if="showSelector"
        transition="question-type-bounce"
      >
        <div class="button color-change">
          <i class="iconfont icon-danxuan"></i>
        单选</div>
        <div class="button color-change">
          <i class="iconfont icon-duoxuan"></i>
        多选</div>
        <div class="button color-change">
          <i class="iconfont icon-wenbenkuang"></i>s
        文本框</div>
      </div>
      <div id="add-button">
        <span @click="toggleSelector()">
          <i class="iconfont icon-jia"></i>
          添加问题
        </span>
      </div>
    </div>
    <hr>
    <div id="suvery-control">
      <label>问卷截止日期:
        <input type="text" class="suvery-date" value="">
      </label>
      <div class="button color-change" @click="saveEdit()">保存问卷</div>
      <div class="button color-change">发布问卷</div>
    </div>
  </div>
</template>

<script>
  import QuestionBuild from './questionModule/QuestionBuild';
  import { getSuverys, getActiveSuvery } from '../vuex/getters';
  import { editSuvery } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        getSuverys,
        suvery:getActiveSuvery,
      },
      actions: {
        editSuvery,
      }
    },
    data() {
      return {
        showSelector: false,
      }
    },
    components: {
      QuestionBuild,
    },
    methods: {
      toggleSelector() {
        this.showSelector = !this.showSelector;
      },
      saveEdit() {
        this.editSuvery();
        this.$route.router.go('/Home');
      },
    }
  };

</script>

<style lang="scss" scoped>
  .user-input
  {
    border: none;
    display: block;
    outline: none;
  }
  #title
  {
    width: 100%;
    height: 1.4em;
    margin: 1em auto;
    font-size: 30px;
    line-height: 1.4em;
    text-align: center;

    &:hover {
      background-color: #c0e3ea;
    }
  }

  #suvery-control
  {
    padding: 2.5em 0;

    input {
      text-indent: 0.75em;
    }
  }

  #suvery-control>.button
  {
    float: right;
    margin: 0 5px;
  }
 
  #add-question
  {
    margin: 20px auto;
    width: 95%;
    border: 1px solid #bbb;
    color: #666;
    overflow: hidden;
  }
  
  #question-type div
  {
    margin: 0 1em;
    height: 2em;
    width: 6em;
    line-height: 2em;
    font-size: 20px;
  }

  #add-button
  {
    height: 3.5em;
    text-align: center;
    font-size: 20px;
    line-height: 3.5em;
    background-color: #ddd;
  }
  #add-button span
  {
    cursor: pointer;
    user-select: none;
  }

  .question-type-bounce-transition 
  {
    transition: all .3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    overflow: hidden;
  }
  
  .question-type-bounce-enter,.question-type-bounce-leave 
  {
    height: 0;
    opacity: 0;
  }
  #questions {
    width: 95%;
    margin: 1.2em auto;
    font-size: 20px;

    .suvery-questions {
      width: 100%;
      padding: 1em 1.5em; 
      box-sizing: border-box;

      &:hover {
        background-color: #c0e3ea;
        .suvery-questions-title {
          font-weight: bold;
          input[type="text"] {
            font-weight: bold;
          }
        }
        .question-control {
          color: #000;
        }
      } 

      .suvery-questions-options {
        margin-left: 2em;

        .option {
          .icon-clear {
            color: transparent;
          }

          &:hover {
            .icon-clear {
              color: #CB1B45;
              cursor: pointer;
            }
          }
        }
      }

      input[type="text"] {
        display: inline-block;
        height: 1.5em;
        width: 96%;
        line-height: 1.5em;
        font-size: 1em;
        background-color: transparent;
      }

      .add-option {
        width: 100%;
        height: 1.5em;
        font-size: .8em;
        line-height: 1.2em;
        box-sizing: border-box;
        color: transparent;
        text-align: center;
        cursor: pointer;

        &:hover {
          color: #000;
          border: 1px dashed #000;
        }
      }
      .question-control {
        text-align: right;
        color: #FFF;
        span {
          display: inline-block;
          margin: 0.2em 0.5em;
          cursor: pointer;
        }
      }
    }
  }

  
</style>

