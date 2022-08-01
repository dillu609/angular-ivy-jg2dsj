import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { ConditionsComponent } from './conditions/conditions.component';
import{ PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path:"event",
    component:EventComponent
  },
  {
    path:"property",
    component:PropertyComponent
  },
  {
    path:"conditions",
    component:ConditionsComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
