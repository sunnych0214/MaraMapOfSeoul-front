import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PlaceComponent } from './place/place.component';
import { MapComponent } from './map/map.component';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'place', component: PlaceComponent},
      { path: 'map', component: MapComponent},

    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
