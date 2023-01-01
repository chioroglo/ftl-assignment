import {Component} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'views-chart',
  templateUrl: './views-chart.component.html',
  styleUrls: ['./views-chart.component.css']
})
export class ViewsChartComponent {
  chart: Chart;

  ngOnInit() {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Febr', 'Mar', 'Apr'],
        datasets: [{
          label: "",
          backgroundColor: 'rgba(51, 51, 255, 0.5)',
          borderColor: 'rgb(51,51,255,1)',
          data: [2.5, 1.4, 6, 4],
          fill: true,
          tension: 0.5,
          pointRadius: 0
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              display: false,
              stepSize: 10,
            }
          },
          x: {
            beginAtZero: true,
            grid: {
              display: false
            }
          }

        }
      }

    });
  }
}
