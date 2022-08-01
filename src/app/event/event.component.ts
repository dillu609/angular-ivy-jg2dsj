import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  constructor() {}

  // name = "";
  getEvent(name) {
    console.log(name);
  }
  curentVal = '';
  curentSub = '';
  
  getVal(val) {
    console.log(val);
    this.curentVal  = val;
  }

  getSub(val) {
    console.log(val);
    this.curentSub  = val;
  }
}
