import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.css']
})
export class FeedHeaderComponent implements OnInit {
  @Input() header: string;
  @Input() counters: Counter[];
  constructor() { }

  ngOnInit() {
  }

}
