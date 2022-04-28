import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
          padding: '20px 20px 0px 20px',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          backgroundColor: 'white',
        })
      ),
      transition('open => closed', [animate('1.0s')]),
      transition('closed => open', [animate('1.0s')]),
    ]),
  ],
})
export class ZippyComponent implements OnInit {
  @Input('title') title?: string = 'Zippy Title';
  isExapanded: boolean = false;
  constructor() {}

  ngOnInit() {}
  expand() {
    this.isExapanded = !this.isExapanded;
  }
}
