import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from '../place/place.component';
import { MapComponent } from '../map/map.component';

@NgModule({
  declarations: [
    PlaceComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
