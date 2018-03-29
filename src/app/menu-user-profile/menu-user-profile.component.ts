import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user-profile',
  templateUrl: './menu-user-profile.component.html',
  styleUrls: ['./menu-user-profile.component.css']
})
export class MenuUserProfileComponent implements OnInit {
  user = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: {
      path: 'assets/avatar-john-doe.png',
      style: {
        'background-position': '56% 15%',
        'background-size': '400%',
      }
    }
  }
  avatarBackground = {
    'background': 'url("assets/avatar-john-doe.png") no-repeat',
    'background-position': '56% 15%',
    'background-size': '400%',
  }
  constructor() { }

  ngOnInit() {
  }

}
