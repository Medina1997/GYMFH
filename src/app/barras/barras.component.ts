import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  mes1: number;
  mes2: number;
  mes3: number;
  mes4: number;
  con;

  // tslint:disable-next-line: member-ordering
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  // tslint:disable-next-line: member-ordering
  public barChartLabels: Label[] = ['Mes1', 'Mes2', 'Mes3', 'Mes4'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
    { data: [this.mes1, this.mes2, this.mes3, this.mes4], label: 'Calorias' }
  ];
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public randomize(): void{
    // Only Change 3 values
    const data = [this.mes1, this.mes2, this.mes3, this.mes4];
    this.barChartData[0].data = data;
  }
  constructor() { }

  ngOnInit(): void {
  }
  /*enviar() {
    let array: any[] = [] ;
    array[0] = this.mes1;
    array[1] = this.mes2;
    array[2] = this.mes3;
    array[3] = this.mes4;
    return array
  }*/

}
