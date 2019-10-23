import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  placesByStar;
  
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.placeListByStarDown().subscribe((data)=>{
      console.log(data);
      this.placesByStar = data;
    });
  }
}
