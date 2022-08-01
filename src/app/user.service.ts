import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideRoutes } from '@angular/router';
@Injectable({
  providedIn: 'root'}
)
export class UserService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get(url)
  }

}