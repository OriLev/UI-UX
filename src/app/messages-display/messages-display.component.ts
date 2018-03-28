import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages-display',
  templateUrl: './messages-display.component.html',
  styleUrls: ['./messages-display.component.css']
})
export class MessagesDisplayComponent implements OnInit {
  @Input() messagesList: number[];
  constructor() { }

  ngOnInit() {
  }

}
