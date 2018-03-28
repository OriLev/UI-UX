import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-header',
  templateUrl: './data-header.component.html',
  styleUrls: ['./data-header.component.css']
})
export class DataHeaderComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
