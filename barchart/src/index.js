 import * as echarts from "echarts";
 
 // Initialize the echarts instance based on the prepared dom
 var myChart = echarts.init(document.getElementById('barchart-dev'));

 myChart.setOption({
    title: {
        text: 'ECharts Getting Started Example'
      },
      tooltip: {},
      legend: {
        data: ['sales']
      },
      xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
 });