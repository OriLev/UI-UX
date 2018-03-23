import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuItems = ['home', 'workflow', 'statistics', 'calendar', 'users', 'settings']
  .map(item => (
    {
      name: item[0].toUpperCase() + item.slice(1),
      iconURL: '/assets/' + item + '.png',
    }
  ))
  constructor() { }

  ngOnInit() {
  }

}
