import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-component',
  templateUrl: './activity-component.component.html',
  styleUrls: ['./activity-component.component.css']
})
export class ActivityComponentComponent implements OnInit {
  @Input() activity: Activity;
  finalPredicate: string;
  markerStyle: object = {
    'background': 'rgba(83, 132, 255, 255)'
  }
  constructor() { }

  ngOnInit() {
    const { user, action, predicate} = this.activity;
    const { firstName, lastName } = user;
    const totalActivity = [firstName, lastName, action, predicate].join(' ');
    if (totalActivity.length > 50) {
      this.finalPredicate = predicate.split(' ').slice(0, -1).concat(['(...)']).join(' ');
    } else {
      this.finalPredicate = predicate;
    }
  }

}
