import { Component, OnInit, Input } from '@angular/core';
// import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: {
    name: string,
    iconURL: string,
  }

  public contentBackground: {
    'background': string,
    'background-position': string,
    'background-size': string,
  }
  constructor() {}

  ngOnInit() {
    this.contentBackground = {
      'background': 'url(' + this.menuItem.iconURL + ') no-repeat',
      'background-position': '0px 10%',
      'background-size': '1rem',
    }
    console.log(this.menuItem.iconURL)
  }

}
