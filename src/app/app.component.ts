import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        width: '19.85%',
      })),
      state('out', style({
        width: '0%',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
})
export class AppComponent {
  menuState = 'in';

  toggleMenu(event: any): void {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
