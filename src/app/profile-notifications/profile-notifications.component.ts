import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-notifications',
  templateUrl: './profile-notifications.component.html',
  styleUrls: ['./profile-notifications.component.css']
})
export class ProfileNotificationsComponent implements OnInit {
  newNotifications: number;
  constructor() { }

  ngOnInit() {
    this.newNotifications = 3;
  }

}
