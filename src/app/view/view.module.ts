import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { PlaceComponent } from '../place/place.component';
import { MapComponent } from '../map/map.component';
import { ViewComponent } from './view.component';
import { PlaceviewComponent } from '../place/placeview/placeview.component';


export const ROUTES:Routes = 
[ 
  { path: '', component: MapComponent},
  { path: 'view', 
    component: ViewComponent,
    children: 
    [ 
      { 
        path: 'place', 
        component: PlaceComponent,
        children:
        [{ path: '', component: PlaceviewComponent}] }, 
      { path: 'map', component: MapComponent}
    ]
  }
]

@NgModule({
  declarations: [
    PlaceComponent,
    MapComponent,
    ViewComponent,
    PlaceviewComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})

export class ViewModule { }
