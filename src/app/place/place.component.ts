import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  places;
  searchText;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    document.getElementById('place_wrap').classList.add('selected');
    document.getElementById('map_wrap').classList.remove('selected');
    this.apiService.placeListAll().subscribe((data) => {
      console.log(data);
      this.places = data;
    });
  } 

  // public search(){
  //   searchKeyWord : String = document.getElementById("searchBox").
  //   return searchKeyWord;
  // }


  public orderByStar() {
    console.log("click is working");
    alert('Open');
  }

  public orderByReview() {
    console.log("click is working");
    alert('Open');
  }

  public orderByView() {
    console.log("click is working");
    alert('Open');
  }
}
