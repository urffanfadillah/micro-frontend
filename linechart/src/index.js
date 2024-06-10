 import * as echarts from "echarts";
 
 // Initialize the echarts instance based on the prepared dom
 var myChart = echarts.init(document.getElementById('linechart-dev'));

 myChart.setOption({
    title: {
      text: 'ECharts Line Graph'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
 });