import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
    selector: 'app-dona',
    templateUrl: './dona.component.html',
    styles: [
    ]
})
export class DonaComponent {

    @Input() titulo: string = ""; 
    @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
    @Input('data') doughnutChartData: ChartData<'doughnut'> = {
        labels: this.doughnutChartLabels,
        datasets: [
            {
                data: [],
                backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
            }
        ]
    };
    //public doughnutChartType: ChartType = 'doughnut';

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

}
