import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent  {

  constructor() { }
  name ="Dilshad";
  disabledBox = true;
  proVal(){
    this.disabledBox = false;
  }
  
}