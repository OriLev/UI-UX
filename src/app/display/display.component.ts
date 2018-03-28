import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  user: {
    firstName: string,
    lastName: string,
  }

  getUser(): void {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
    }
  }
  constructor() { }

  ngOnInit() {
    this.getUser();
  }

}
