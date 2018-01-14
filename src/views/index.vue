<style scoped>

.content {
    color: red;
}

.chart{
    display:inline-block;
    width: 48%;
    height: auto;
}

</style>

<template>

<div>
    <div class="content">{{msg}}
    </div>
    <div id="charts">
      <div class="chart">
        <ve-line :data="chartLineData"></ve-line>
      </div>
      <div class="chart">
        <ve-histogram :data="chartHistogramData" :settings="chartSettings"></ve-histogram>
      </div>
    </div>
    <Spin size="large" fix v-if="spinVisible"></Spin>
</div>

</template>

<script>

import VeLine from 'v-charts/lib/line'
import VeHistogram from 'v-charts/lib/histogram'
import $ from 'jquery'

export default {
    data() {
            return {
                msg: '欢迎使用服装设计师看板系统!',
                spinVisible:false,
            }
        },
        created() {
          this.chartLineData = {
              columns: ['日期', '搭配数'],
              rows: [{
                  '日期': '1月1日',
                  '搭配数': 123
              }, {
                  '日期': '1月2日',
                  '搭配数': 1223
              }, {
                  '日期': '1月3日',
                  '搭配数': 2123
              }, {
                  '日期': '1月4日',
                  '搭配数': 4123
              }, {
                  '日期': '1月5日',
                  '搭配数': 3123
              }, {
                  '日期': '1月6日',
                  '搭配数': 6123
              }]
          },
          this.chartHistogramData = {
            columns: ['日期', '设计师'],
            rows: [
              { '设计师': 1523, '日期': '1月1日'},
              { '设计师': 1223, '日期': '1月2日'},
              { '设计师': 2123, '日期': '1月3日'},
              { '设计师': 4123, '日期': '1月4日'}
            ]
          },
          this.chartSettings = {
            metrics: ['设计师'],
            dimension: ['日期']
          }
        },

        components: {
            VeLine,VeHistogram
        }
}

</script>
