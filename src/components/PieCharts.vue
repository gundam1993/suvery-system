<template>
  <div id="pie-charts">
    
  </div>
</template>

<script>
  var echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/pie');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');

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
                  visualMap: {
                    show: false,
                    min: 0,
                    max: 20,
                    inRange: {
                      colorLightness: [0.5, 1.2]
                    }
                  },
                  series: [{
                    name: '数据占比',
                    type: 'pie',
                    label: {
                      normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}:{d}%'
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
        for (let data in this.results) {
              this.option.series[0].data.push({
                "value": this.results[data],
                "name": data,
              });
          }
      },
    }
  }
</script>

<style>
  #pie-charts {
    width: 100%;
    height: 400px;
    z-index: 1;
  }
</style>