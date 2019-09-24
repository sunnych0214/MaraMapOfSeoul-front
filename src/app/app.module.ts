import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewModule } from './view/view.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';

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
    ViewModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
