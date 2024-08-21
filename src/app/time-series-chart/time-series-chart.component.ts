import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { CommonModule, NgIf } from '@angular/common'; // Example import if needed for the template
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-time-series-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './time-series-chart.component.html',
  styleUrl: './time-series-chart.component.css'
})
export class TimeSeriesChartComponent {

  private chartInstance!: echarts.ECharts;

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('chart')!;
    this.chartInstance = echarts.init(chartDom);

    const option = {
      xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel: {
          formatter: (value: number) => {
            const date = new Date(value);
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          }
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 0,
        interval: 1,
        splitLine: { show: false }
      },
      series: [
        {
          type: 'line',
          data: this.generateSampleData(),
          areaStyle: {},
          lineStyle: {
            width: 10
          },
          symbol: 'none'
        }
      ],
      grid: {
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',
        containLabel: true
      }
    };

    this.chartInstance.setOption(option);
  }

  generateSampleData():  any {
    const now = new Date();
    let data = [];
    for (let i = 0; i < 100; i++) {
      data.push( [
          new Date(now.getTime() - i * 1000), // time points
          Math.round(Math.random()) // generates either 0 or 1
        ]
      );
    }
    console.log(data);
    return data; // reverse the data to show the latest time on the right
  }
}
