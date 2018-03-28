import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  tasksList: Task[];
  feeds = [
    {
      type: 'tasks',
      list: this.tasksList,
    },
    {
      type: 'messages',
      list: [0,1,25,6],
    },
    {
      type: 'activity',
      list: [6,5,4,3,6],
    }
  ]
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksList = this.tasksService.getTasks();
    this.feeds[0].list = this.tasksList;
  }
}
