import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @Input() menuState: string;
  @Output() menuStateChange: EventEmitter<String> = new EventEmitter<String>()

  toggleMenu(): void {
    this.menuStateChange.emit(this.menuState === 'out' ? 'in' : 'out');
  }
  constructor() { }

  ngOnInit() {
  }

}
