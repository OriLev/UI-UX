import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() user: User;
  avatarStyle: {
    'background': string,
    'background-position': string,
    'background-size': string
  }
  constructor() { }

  ngOnInit() {
    const { path, style } = this.user.avatar;
    this.avatarStyle = {
      'background': 'url(' + path + ') no-repeat',
      'background-position': style['background-position'],
      'background-size': style['background-size']
    }
  }

}
