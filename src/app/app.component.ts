import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./reset.scss', './app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'MaraMapOfSeoul';
  placesByStar;

  constructor(private apiService : ApiService) { } 

  ngOnInit() {
    this.apiService.placeListByStarDown().subscribe((data)=>{
      console.log(data);
      this.placesByStar = data;
    });
  }

}