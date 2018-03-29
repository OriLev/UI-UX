import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Activity } from '../activity';
import { Message } from '../message';
import { TasksService } from '../tasks.service';
import { ActivityService } from '../activity.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  tasksList: Task[];
  activityList: Activity[];
  messagesList: Message[];
  feeds = [
    {
      type: 'tasks',
      list: this.tasksList,
    },
    {
      type: 'messages',
      list: this.messagesList,
    },
    {
      type: 'activity',
      list: this.activityList,
    }
  ]
  constructor(
    private tasksService: TasksService,
    private activityService: ActivityService,
    private messagesService: MessagesService,
  ) { }

  ngOnInit() {
    this.getTasks();
    this.getMessages();
    this.getActivities();
  }

  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe(tasks => this.tasksList = tasks)
    this.feeds[0].list = this.tasksList;
  }

  getMessages(): void {
    this.messagesService.getMessages()
      .subscribe(messages => this.messagesList = messages)
    this.feeds[1].list = this.messagesList;
  }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => this.activityList = activities)
    this.feeds[2].list = this.activityList;
  }
}
