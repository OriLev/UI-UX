import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Activity } from './activity';
import { ACTIVITIES } from './mock-activities';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): Observable<Activity[]> {
    return of(ACTIVITIES );
  }
}
