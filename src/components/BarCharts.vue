<template>
  <div id="bar-charts">
    
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    props: ["results","results-num"],
    data() {
      return {
        options: {},
      }
    },
    computed: {
      option: {
        get() {
          return {
                  yAxis: {
                    data: [],
                    type: 'category',
                  },
                  xAxis: {
                    max: 100,
                    axisLabel: {
                      formatter: '{value} %'
                    },
                  },
                  series: [{
                    name: '数据占比',
                    type: 'bar',
                    label: {
                      normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}%'
                      },
                    },
                    data: []
                  }],
                  
                };
              },
      },
    },
    ready(){
      var Charts = echarts.init(this.$el);
      this.buildCharts();
      Charts.setOption(this.option);
      window.addEventListener("resize",function(){Charts.resize();});
    },
    methods: {
      buildCharts() {
        if (!this.results.effectiveResults) {
            this.option.yAxis.data = Object.keys(this.results).reverse();
            for (let data in this.results) {
              this.option.series[0].data.push((this.results[data] / this.resultsNum * 100).toFixed(2));
            }
            this.option.series[0].data.reverse();
        }else{
          this.option.yAxis.data = ["有效回答占比"];
          this.option.series[0].data = [(this.results.effectiveResults / this.resultsNum * 100).toFixed(2) ];
        }
      },
    }
  }
</script>

<style>
  #bar-charts {
    width: 100%;
    height: 400px;
    z-index: 1;
  }
</style>