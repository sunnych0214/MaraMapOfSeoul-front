import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent} from './place/place.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'place', component: PlaceComponent},
  {path:'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
