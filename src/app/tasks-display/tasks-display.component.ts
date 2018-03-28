import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-display',
  templateUrl: './tasks-display.component.html',
  styleUrls: ['./tasks-display.component.css']
})
export class TasksDisplayComponent implements OnInit {
  @Input() tasksList: Task[];
  counterList = [
    { name: 'total tasks',
      number: 5,
      style: {'background': 'rgba(83, 132, 255, 255)'},
    },
    {
      name: 'delayed tasks',
      number: 2,
      style: {'background': 'rgba(248, 60, 123, 255)'},
    },
  ]

  markerStyle = {
    'background': 'rgba(83, 132, 255, 255)'
  }
  constructor() { }

  ngOnInit() {
  }

}
