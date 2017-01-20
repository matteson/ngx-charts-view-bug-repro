import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {LineChartComponent} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild(LineChartComponent) chart: LineChartComponent;
  update() {
    this.chart.update();
  }

  @Input()
  data: any;

  xAxisLabel: string = 'X axis label';
  yAxisLabel: string = 'Y axis label';

  view: any[];
  gradient = false;

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  showLegend: boolean = true;

  schemeType = 'ordinal';
  rangeFillOpacity: number = 0.15;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  autoScale = true;

  constructor() { }

  ngOnInit() {
  }

  legendClick(event) {
    console.log('PK Legend Click');
  }

  select(event) {
    console.log('PK Select');
  }

}
