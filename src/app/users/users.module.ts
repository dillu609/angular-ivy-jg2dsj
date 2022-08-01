import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent} from './login/login.component'
import { UserComponent } from './user/user.component'
import { SignupComponent } from './signup/signup.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, UserComponent, SignupComponent],
  exports:[
    LoginComponent, UserComponent, SignupComponent
  ]
})
export class UsersModule { }