import { Component } from '@angular/core';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stage_ete';
}
