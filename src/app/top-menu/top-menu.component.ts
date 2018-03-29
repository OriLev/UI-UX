import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @Input() menuState: string;
  @Output() menuStateChange = new EventEmitter<null>()
  yellow = 'green';
  toggleMenu(event: any): void {
    this.menuStateChange.emit(null);
  }
  constructor() { }

  ngOnInit() { }

}
