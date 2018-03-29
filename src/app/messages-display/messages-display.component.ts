import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { Counter } from '../counter';

@Component({
  selector: 'app-messages-display',
  templateUrl: './messages-display.component.html',
  styleUrls: ['./messages-display.component.css']
})
export class MessagesDisplayComponent implements OnInit {
  @Input() messagesList: {
    type: string,
    list: Message[]
  };
  counters: Counter[] = [];
  constructor() { }

  ngOnInit() {
    this.counters[0] = {
      name: 'newMessages',
      amount: this.messagesList.list.filter(message => message.wasRead).length,
      style: {'background': 'rgba(83, 132, 255, 255)'},
    }
  }

}
