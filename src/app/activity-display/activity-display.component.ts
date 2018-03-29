import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../activity';
import { Counter } from '../counter';

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.css']
})
export class ActivityDisplayComponent implements OnInit {
  @Input() activityList: {
    type: string,
    list: Activity[],
  };
  counters: Counter[] = [];
  constructor() { }

  ngOnInit() {
    this.counters[0] = {
      name: 'totalActivities',
      amount: this.activityList.list.length,
      style: {'background': 'rgba(83, 132, 255, 255)'},
    }
  }

}
