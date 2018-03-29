import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { Counter } from '../counter';

@Component({
  selector: 'app-tasks-display',
  templateUrl: './tasks-display.component.html',
  styleUrls: ['./tasks-display.component.css']
})
export class TasksDisplayComponent implements OnInit {
  @Input() tasksList: {
    type: string,
    list: Task[],
  };
  counters: Counter[] = [];
  constructor() {}

  ngOnInit() {
    this.counters[0] = {
      name: 'totalTasks',
      amount: this.tasksList.list.length,
      style: {'background': 'rgba(83, 132, 255, 255)'},
    }
    this.counters[1] = {
      name: 'delayedTasks',
      amount: this.tasksList.list.filter(task => task.daysLeft < 0).length,
      style: {'background': 'rgba(248, 60, 123, 255)'},
    }
  }

}
