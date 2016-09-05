<template>
  <div class="container">
    <h1>{{ suvery.title }}</h1>
    <h5>此统计分析只包含已经完整回收的数据</h5>
    <hr>
      <div class="suvery-results"
           v-for=" question in suvery.questions">
           <div class="suvery-results-title">
            {{ "Q" +  (suvery.questions.indexOf(question) + 1) + ".&nbsp;" + question.title}}
          </div>
          <div class="suvery-results-charts"
               v-if="question.type === 'radio'">
            <bar-charts :results="question.results"
                    :results-num="question.resultsNum"></bar-charts>
          </div>
          <div class="suvery-results-charts"
               v-if="question.type === 'checkbox'">
               <pie-charts :results="question.results"
                    :results-num="question.resultsNum"></pie-charts>
          </div>
          <div class="suvery-results-charts"
               v-if="question.type === 'textarea'">
               <bar-charts :results="question.results"
                       :results-num="question.resultsNum"></bar-charts>
          </div>
      </div>
    <hr>
    <div class="suvery-commit">
      <div class="button color-change"
           v-link="'/Home'">返回</div>
    </div>
  </div>
</template>

<script>
  import BarCharts from './BarCharts';
  import PieCharts from "./PieCharts";
  import { getActiveSuvery } from '../vuex/getters';

  export default {
    vuex: {
      getters: {
        suvery:getActiveSuvery,
      },
    },
    components: {
      BarCharts,
      PieCharts,
    }
  }
</script>

<style lang="scss" scoped>
  h1,h5 {
    text-align: center;
  }
  .suvery-commit {
    div {
      margin: 2em auto;
    }
  }
  
  .suvery-results-title {
    font-weight: bold;
  }
  .suvery-results-charts {
    width: 100%;
    height: 400px;
  }
  .suvery-results {
    width: 100%;
    padding: 1em 1.5em; 
    box-sizing: border-box;
    margin: 1em auto;

    &:hover {
      background-color: #c0e3ea;
    }
  }
</style>