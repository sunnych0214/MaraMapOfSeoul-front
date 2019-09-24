import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  places;
  searchText;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
     this.apiService.placeListAll().subscribe((data)=>{
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
