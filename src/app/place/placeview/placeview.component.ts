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

  /* 검색 옵션 - 별점순 */
  public orderByStar(star : Option){
    if(star = 1){
      this.apiService.placeListByStarDown().subscribe((data)=>{
        console.log(data);
        this.places = data;
      });
    }
    else if (star = 0){
      this.apiService.placeListByStarUp().subscribe((data)=>{
        console.log(data);
        this.places = data;
      });
    }
  }

  /* 검색 옵션 - 리뷰 개수 순 */
  public orderByReview(review : Option){
    if(review = 1){
      this.apiService.placeListByReviewDown().subscribe((data)=>{
        console.log(data);
        this.places = data;
      });
    }
    else if (review = 0){
      this.apiService.placeListByReviewUp().subscribe((data)=>{
        console.log(data);
        this.places = data;
      });
    }
  }

  /* 검색 옵션 - 조회순 */
  public orderByView(view : Option){
    if(view = 1){
      this.apiService.placeListByViewDown().subscribe((data)=>{
        console.log(data);
        this.places = data;
      });
    }
    else if (view = 0){
      this.apiService.placeListByViewUp().subscribe((data)=>{
        console.log(data);
        this.places = data;
      });
    }
  }
}


export enum Option {
  up = 0,
  down = 1
}


