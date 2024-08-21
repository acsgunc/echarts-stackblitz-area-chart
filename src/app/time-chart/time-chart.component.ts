import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { CommonModule, NgIf } from '@angular/common'; // Example import if needed for the template
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-time-chart',
  standalone: true, // Indicates that this is a standalone component
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.css'],
  imports: [CommonModule, NgxEchartsDirective],// Import any additional Angular modules here, if needed
})
export class TimeChartComponent implements OnInit {

  chartOptions: any;

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    this.chartOptions = {
      xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel: {
          formatter: (value: any) => echarts.format.formatTime('MM-dd hh:mm', value),
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 1,
        boundaryGap: [0, 0],
      },
      series: [
        {
          type: 'line',
          data: [
            ['2024-08-21T00:00:00', 1],
            ['2024-08-21T01:00:00', 0],
            ['2024-08-21T02:00:00', 1],
            ['2024-08-21T03:00:00', 0],
            // Add more data points here
          ],
          areaStyle: {},
          smooth: true,
          lineStyle: {
            width: 0
          }
        }
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      }
    };
  }
}

