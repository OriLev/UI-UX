import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        flexBasis: '20%',
        background: 'blue',
      })),
      state('out', style({
        flexBasis: '0%',
        background: 'blue',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
})
export class AppComponent {
  title = 'app';

  menuState = 'in';

  toggleMenu(newMenuState: string): void {
    this.menuState = newMenuState;
  }
}
