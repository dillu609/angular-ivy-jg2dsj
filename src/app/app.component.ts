import { Component, VERSION } from '@angular/core';
import { UserService } from './user.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  getName(){
    return this.name
  }
  obj = {name:"dilshad", age:30}
  arr = [11,21,13,41,15];
  siteUrl = window.location;
  title = [];
  toParent(data){
    // console.log(data)
    this.title = data;
  }

  apiData:any = []
  constructor(private users:UserService){
    this.users.getData().subscribe(datas=>{
      console.log(datas)
      this.apiData = datas
    })
  }
}
