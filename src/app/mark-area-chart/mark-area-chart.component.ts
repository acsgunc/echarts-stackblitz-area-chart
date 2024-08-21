import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { CommonModule, NgIf } from '@angular/common'; // Example import if needed for the template
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-mark-area-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './mark-area-chart.component.html',
  styleUrl: './mark-area-chart.component.css'
})
export class MarkAreaChartComponent implements OnInit {

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('mark-area-chart')!;
    const chart = echarts.init(chartDom);

    const option = {
      title: {
        text: 'ECharts with Mark Area and Time Axis',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Data Series',
          type: 'line',
          data: [
            ['2024-08-20', 820],
            ['2024-08-21', 932],
            ['2024-08-22', 901],
            ['2024-08-23', 934],
            ['2024-08-24', 1290],
            ['2024-08-25', 1330],
            ['2024-08-26', 1320],
          ],
         // areaStyle: {},
          lineStyle: {
            width: 0
          },
          symbol: 'none',
          markArea: {
            data: [
              [
                {
                  name: 'Highlighted Area',
                  xAxis: '2024-08-22',
                },
                {
                  xAxis: '2024-08-24',
                },
              ],
            ],
          },
        },
      ],
    };

    chart.setOption(option);
  }
}



