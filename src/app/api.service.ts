import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  /* PLACE */
  public placeListAll(){
    return this.httpClient.post(`/api/place/placeListAll`,"");
  }
  
  public placeListByReviewUp(){
    return this.httpClient.post(`/api/place/placeListByReviewUp`,"");
  }

  public placeListByReviewDown(){
    return this.httpClient.post(`/api/place/placeListByReviewDown`,"");
  }

  public placeListByStarDown(){
    return this.httpClient.post(`/api/place/placeListByStarDown`,"");
  }

  public placeListByStarUp(){
    return this.httpClient.post(`/api/place/placeListByStarUp`,"");
  }

  public placeListByViewDown(){
    return this.httpClient.post(`/api/place/placeListByViewDown`,"");
  }

  public placeListByViewUp(){
    return this.httpClient.post(`/api/place/placeListByViewUp`,"");
  }

  public registerPlace(){
    return this.httpClient.post(`/api/place/registerPlace`,"");
  }


  /* REVIEW */
  public maraByPlace(){
    return this.httpClient.post(`/api/review/maraByPlace`,"");
  }
  
  public registerReview(){
    return this.httpClient.post(`/api/review/registerReview`,"");
  }

  public reviewByPlace(){
    return this.httpClient.post(`/api/review/reviewByPlace`,"");
  }

  public starByPlace(){
    return this.httpClient.post(`/api/review/starByPlace`,"");
  }

  public MaraByPlace(){
    return this.httpClient.post(`/api/review/starMaraByPlacestar`,"");
  }

}



