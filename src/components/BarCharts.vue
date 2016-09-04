<template>
  <div id="bar-charts">
    
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    props: ["results"],
    data() {
      return {
        options: {},
      }
    },
    computed: {
      option: {
        get() {
          return {yAxis: {
                    data: [],
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
                  color: ['#3398DB'],
                };
              },
      },
    },
    ready(){
      var barCharts = echarts.init(this.$el);
      this.buildCharts();
      barCharts.setOption(this.option);
    },
    methods: {
      buildCharts() {
        if (this.results) {
          this.option.yAxis.data = Object.keys(this.results);
          var xData = [],
              maxData = 0;
          for (let data in this.results) {
            maxData += this.results[data];
          }
          for (let data in this.results) {
            xData.push(this.results[data] / maxData * 100);
          }
          this.option.series[0].data = xData;
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