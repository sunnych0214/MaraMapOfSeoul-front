import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent} from './place/place.component';
import { MapComponent } from './map/map.component';
import { InsertPlaceComponent } from './insert-place/insert-place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

const routes: Routes = [
  {path:'place', component: PlaceComponent},
  {path:'map', component: MapComponent},
  {path:'insertPlace', component:InsertPlaceComponent},
  {path:'placeDetail', component:PlaceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
