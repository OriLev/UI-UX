import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  tasksList: Task[];
  activityList: Activity[];
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
      list: this.activityList,
    }
  ]
  constructor(private tasksService: TasksService, private activityService: ActivityService) { }

  ngOnInit() {
    this.getTasks();
    this.getActivities();
  }

  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe(tasks => this.tasksList = tasks)
    this.feeds[0].list = this.tasksList;
  }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => this.activityList = activities)
    this.feeds[2].list = this.activityList;
  }
}
