import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-placeview',
  templateUrl: './placeview.component.html',
  styleUrls: ['./placeview.component.scss']
})
export class PlaceviewComponent implements OnInit {
  places;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.placeListAll().subscribe((data)=>{
      console.log(data);
      this.places = data;
    });
  }

}
