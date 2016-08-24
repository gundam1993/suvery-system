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
      <div class="button color-change" @click="">保存问卷</div>
      <div class="button color-change">发布问卷</div>
    </div>
  </div>
</template>

<script>
  import Radio from './Radio.vue';
  import { getSuverys, getActiveSuvery } from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        getSuverys,
        suvery:getActiveSuvery,
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
      }
    }
  };

</script>

<style>
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
  #questions
  {
    width: 95%;
    margin: 0 auto;
  }
</style>

