import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('myChart') private chartRef!: ElementRef;
  @ViewChild('myChart2') private chartRef2!: ElementRef;
  @ViewChild('myChart3') private chartRef3!: ElementRef;
  private chartInstance: Chart | undefined;
  private chartInstance2: Chart | undefined;
  private chartInstance3: Chart<"pie", number[], string> | undefined;
  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [7, 6, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 0.25
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctx2 = this.chartRef2.nativeElement.getContext('2d');
    this.chartInstance2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Line Chart',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const ctx3 = this.chartRef3.nativeElement.getContext('2d');
    this.chartInstance3 = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [{
      label: 'Pie Chart',
      data: [20, 30, 40, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 0.25
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }
});
    
  }
}