import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TasksService {

  constructor() { }
  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
