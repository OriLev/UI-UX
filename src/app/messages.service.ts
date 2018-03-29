import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Message } from './message';
import { MESSAGES } from './mock-messages';


@Injectable()
export class MessagesService {

  constructor() { }
  getMessages(): Observable<Message[]> {
    return of(MESSAGES);
  }
}
