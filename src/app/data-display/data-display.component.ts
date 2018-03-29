import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  data = [
    {
      label: 'Your Sales',
      chartURL: 'assets/sales-chart.png',
    },
    {
      label: 'Report',
      chartURL: 'assets/report-chart.png',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
