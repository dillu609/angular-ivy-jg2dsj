import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LoopsComponent } from './loops/loops.component';
import { FormsComponent } from './forms/forms.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomDirDirective } from './custom-dir.directive';


@NgModule({
  imports:      [ BrowserModule, UsersModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, EventComponent, PropertyComponent, ConditionsComponent, LoopsComponent, FormsComponent, StyleBindingComponent, InputComponent, OutputComponent, CustomDirDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
