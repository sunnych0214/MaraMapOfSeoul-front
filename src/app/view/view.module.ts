import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlaceComponent } from '../place/place.component';
import { MapComponent } from '../map/map.component';
import { AppComponent } from '../app.component';
import { ViewComponent } from './view.component';

export const ROUTES:Routes = 
[ 
  { path: '', component: MapComponent},
  { path: 'view', 
    component: ViewComponent,
    children: 
    [ 
      { path: 'place', component: PlaceComponent }, 
      { path: 'map', component: MapComponent}
    ]
  }
]

@NgModule({
  declarations: [
    PlaceComponent,
    MapComponent,
    ViewComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    CommonModule
  ]
})

export class ViewModule { }
