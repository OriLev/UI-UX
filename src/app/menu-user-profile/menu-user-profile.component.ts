import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user-profile',
  templateUrl: './menu-user-profile.component.html',
  styleUrls: ['./menu-user-profile.component.css']
})
export class MenuUserProfileComponent implements OnInit {
  avatarBackground = {
    'background': 'url("/assets/avatar-john-doe.png") no-repeat',
    'background-position': '56% 15%',
  }
  constructor() { }

  ngOnInit() {
  }

}
