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
  star : boolean;
  review : boolean;
  view : boolean;
  

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    document.getElementById('place_wrap').classList.add('selected');
    document.getElementById('map_wrap').classList.remove('selected');
    this.apiService.placeListAll().subscribe((data) => {
      console.log(data);
      this.places = data;
    });

    this.star = true;
    this.review = true;
    this.view = true;
  } 

  /* 검색 쿼리 */

  /* 검색 옵션 - 별점순 */
  public orderByStar(){
    this.star = !this.star;
    if(this.star == true){
      this.apiService.placeListByStarDown().subscribe((data)=>{
        console.log("[SEARCH] star down");
        console.log(data);
        this.places = data;
      });
    }
    else if (this.star == false){
      this.apiService.placeListByStarUp().subscribe((data)=>{
        console.log("[SEARCH] star up");
        console.log(data);
        this.places = data;
      });
    }
  }

  /* 검색 옵션 - 리뷰 개수 순 */
  public orderByReview(){
    this.review = !this.review;
    if(this.review == true){
      this.apiService.placeListByReviewDown().subscribe((data)=>{
        console.log("[SEARCH] review down");
        console.log(data);
        this.places = data;
      });
    }
    else if (this.review == false){
      this.apiService.placeListByReviewUp().subscribe((data)=>{
        console.log("[SEARCH] review up");
        console.log(data);
        this.places = data;
      });
    }
  }

  /* 검색 옵션 - 조회순 */
  public orderByView(){
    this.view = !this.view
    if(this.view == true){
      this.apiService.placeListByViewDown().subscribe((data)=>{
        console.log("[SEARCH] view down");
        console.log(data);
        this.places = data;
      });
    }
    else if (this.view == false){
      this.apiService.placeListByViewUp().subscribe((data)=>{
        console.log("[SEARCH] view up");
        console.log(data);
        this.places = data;
      });
    }
  }
}