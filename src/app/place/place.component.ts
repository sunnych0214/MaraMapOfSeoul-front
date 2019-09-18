import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  places;
  
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.placeListAll().subscribe((data)=>{
      console.log(data);
      this.places = data;
    });
  }

}
