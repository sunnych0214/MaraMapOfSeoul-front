import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { PlaceComponent } from '../place/place.component';
import { MapComponent } from '../map/map.component';
import { ViewComponent } from './view.component';
import { PlaceviewComponent } from '../place/placeview/placeview.component';
import { InsertPlaceComponent } from '../insert-place/insert-place.component';


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
      { path: 'map', component: MapComponent},
      { path: 'insertPlace', component : InsertPlaceComponent}
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
    RouterModule.forRoot(ROUTES,{onSameUrlNavigation: `reload`}),
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    AgmCoreModule
  ],
  exports: [RouterModule]
})

export class ViewModule { }
