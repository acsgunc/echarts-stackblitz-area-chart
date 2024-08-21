import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import * as echarts from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { TimeChartComponent } from './app/time-chart/time-chart.component';

@Component({
  selector: 'app-root',
  imports: [TimeChartComponent],
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>

    <app-time-chart></app-time-chart>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideEcharts()]
}).catch((err) => console.error(err));
