<template>
  <div class="container">
    <input 
      type="text" 
      id="title" 
      class="user-input" 
      placeholder="这里是标题" 
      autocomplete="off" 
      v-model="activeSuvery.title"
      >
    <hr>
    <question-build :questions="activeSuvery.questions"></question-build>
    <div id="add-question">
      <div 
        id="question-type" 
        v-if="showSelector"
        transition="question-type-bounce"
      >
        <div class="button color-change"
             @click="this.addQuestion('radio')">
          <i class="iconfont icon-danxuan"></i>
        单选</div>
        <div class="button color-change"
             @click="this.addQuestion('checkbox')">
          <i class="iconfont icon-duoxuan"></i>
        多选</div>
        <div class="button color-change"
             @click="this.addQuestion('textarea')">
          <i class="iconfont icon-wenbenkuang"></i>
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
    <date-selector></date-selector>
    <div id="suvery-control">
      <div class="button color-change" @click="saveEdit()">保存问卷</div>
      <div class="button color-change">发布问卷</div>
    </div>
  </div>
</template>

<script>
  import QuestionBuild from './QuestionBuild';
  import DateSelector from './DateSelector';
  import { getActiveSuvery } from '../vuex/getters';
  import { editSuvery, addQuestion } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        activeSuvery: getActiveSuvery,
      },
      actions: {
        editSuvery,
        addQuestion,
      }
    },
    data() {
      return {
        showSelector: false,
      }
    },
    computed: {
      suvery: {
        get() {
          return this.activeSuvery;
        },
      },
      abc: {
        get() {
          return this.activeSuvery.questions.slice();
        },
      }
    },
    components: {
      QuestionBuild,
      DateSelector,
    },
    methods: {
      toggleSelector() {
        this.showSelector = !this.showSelector;
      },
      saveEdit() {
        this.editSuvery(this.suvery);
        this.$route.router.go('/Home');
      },
    },
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
  
</style>

