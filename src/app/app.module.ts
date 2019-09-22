import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ViewModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
