import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  places;

  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit() {
    this.apiService.placeListAll().subscribe((data)=>{
      console.log(data);
      //this.router.navigateByUrl('place');
      this.places = data['places'];
    });
  }

}
