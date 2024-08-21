import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import * as echarts from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { TimeChartComponent } from './app/time-chart/time-chart.component';
import { TimeSeriesChartComponent } from './app/time-series-chart/time-series-chart.component';
import { MarkAreaChartComponent } from './app/mark-area-chart/mark-area-chart.component';

@Component({
  selector: 'app-root',
  imports: [TimeChartComponent, TimeSeriesChartComponent, MarkAreaChartComponent],
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>

    <app-time-chart></app-time-chart>
    <app-mark-area-chart></app-mark-area-chart>
    <app-time-series-chart> </app-time-series-chart>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideEcharts()]
}).catch((err) => console.error(err));
