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
  toggleMenu(): void {
    this.menuStateChange.emit(null);
  }
  constructor() { }

  ngOnInit() {
    // setInterval(() => this.yellow = this.yellow === 'green' ? 'url(/assets/002-006-003-001-000.png)' : 'green' , 1000 )
  }

}
