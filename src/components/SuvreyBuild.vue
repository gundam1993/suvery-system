<template>
  <div class="container">
    <input 
      type="text" 
      id="title" 
      class="user-input" 
      placeholder="这里是标题" 
      autocomplete="off" 
      :value="title"
      @input="updateSuveryTitle">
    <hr>
    <question-build :questions="question"></question-build>
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
  import { getActiveSuveryTitle, getActiveSuveryQuestions } from '../vuex/getters';
  import { editSuvery, addQuestion, updateTitle } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        title:getActiveSuveryTitle,
        question:getActiveSuveryQuestions
      },
      actions: {
        editSuvery,
        addQuestion,
        updateTitle,
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
      updateSuveryTitle(e) {
        this.updateTitle(e.target.value);
      }
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
  
</style>

