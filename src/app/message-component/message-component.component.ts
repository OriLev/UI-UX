import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {
  @Input() message: Message;
  finalMessageText: string;
  constructor() { }

  ngOnInit() {
    let { text } = this.message;
    this.finalMessageText = text;
    if (text.length > 41) {
      while (text.length > 41) {
        text = text.split(' ').slice(0, -1).join(' ');
      }
      text = text.concat(' (...)');
    }
    this.finalMessageText = text;
  }

}
