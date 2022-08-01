import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() parent:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    // this.parent.emit("how are you")
  }

  sendData(){
    let datas = [1,5,8,8,9,6];
    this.parent.emit(datas)
    
  }

}