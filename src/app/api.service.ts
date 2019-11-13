import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Headers, Http, RequestMethod, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient,
    private http: Http) { }

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
  
  public placeListByStation(station: string){
    return this.httpClient.post(`/api/place/placeListByStation`,station);
  }

  public registerPlace(place: any){
    return this.httpClient.post(`/api/place/registerPlace`,place).subscribe(
      (res) => console.log(res),(err) => console.log(err)
    );
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


  public uploadFile(thumbnailFile: any){
    const headers = new Headers({'enctype': 'multipart/form-data'});
    let data = new FormData();
    let result;
    data.append('file', thumbnailFile);
    return this.http.post(`/api/fileUpload`,data , { headers })
   console.log(result);
   return result;
  }
}



