import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent {

  constructor() { }
  arr = ["dilshad", "babji", "munthaj", "madhu"];
  obj = [
    {
      name : "dilshad",
      age : 30
    },
    {
      name : "babji",
      age : 31
    },
    {
      name : "munthaj",
      age : 52
    },
    {
      name : "madhu",
      age : 25
    }

  ]

}