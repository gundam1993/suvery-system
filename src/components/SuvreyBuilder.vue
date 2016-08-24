<template>
  <div>
    <input 
      type="text" 
      id="title" 
      class="user-input" 
      placeholder="这里是标题" 
      autocomplete="off" 
      :value="suvery.title">
    <hr>
    <div id="questions">
      <div class="suvery-questions"
           v-for="question in suvery.questions">
          <div class="suvery-questions-title">
            {{ "Q" +  (suvery.questions.indexOf(question) + 1)}}
            <input type="text" class="user-input" :value="question.title">
          </div>
          <div class="suvery-questions-options"
               v-if="question.type == 'radio'">
              <div class="option-radio"
                   v-for="option in question.options">
                <i class="iconfont icon-radiobuttonunchecked"></i>
                <input type="text" class="user-input" :value="option">
                <i class="iconfont icon-clear"></i>
              </div>
          </div>
          <div class="add-option">
            <i class="iconfont icon-jia"></i>
          </div>
          <div class="question-control">
            <span>上移</span>
            <span>下移</span>
            <span>复用</span>
            <span>删除</span>
          </div>
      </div>
    </div>
    <div id="add-question">
      <div 
        id="question-type" 
        v-if="showSelector"
        transition="bounce"
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
  import Radio from './Radio.vue';
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
      Radio,
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
    height: 40px;
    margin: 30px auto;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }

  #title:hover
  {
    background-color: #c0e3ea;
  }
  
  #suvery-control
  {
    padding: 40px 0;
  }

  #suvery-control>.button
  {
    float: right;
    margin: 0 5px;
  }
  #suvery-control input
  {
    text-indent: 10px;
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
    margin: 0 20px;
    height: 40px;
    width: 120px;
    line-height: 40px;
    font-size: 20px;
  }

  #add-button
  {
    height: 70px;
    text-align: center;
    font-size: 20px;
    line-height: 70px;
    background-color: #ddd;
  }
  #add-button span
  {
    cursor: pointer;
    user-select: none;
  }

  .bounce-transition 
  {
    transition: all .3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    overflow: hidden;
  }
  
  .bounce-enter,.bounce-leave 
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

        .option-radio {
          input {
            
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

