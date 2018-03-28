import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.css']
})
export class ActivityDisplayComponent implements OnInit {
  @Input() activityList: number[];
  constructor() { }

  ngOnInit() {
  }

}
