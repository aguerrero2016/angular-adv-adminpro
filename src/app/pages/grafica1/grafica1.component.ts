import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-grafica1',
    templateUrl: './grafica1.component.html',
    styles: [
    ]
})
export class Grafica1Component {
    public labels1: string[] = ['Pan', 'Refrescos', 'Tacos'];
    public data1 = {
        labels: this.labels1,
        datasets: [
            {
                data: [15, 40, 10],
                backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
            }
        ]
    };
}
