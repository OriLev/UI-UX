import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {
  @Input() task: Task;
  markerStyle: object = {
    'background': 'rgba(83, 132, 255, 255)'
  }
  constructor() { }

  ngOnInit() {
  }

}
