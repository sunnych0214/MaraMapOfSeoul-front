import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  public placeListAll(){
    return this.httpClient.post(`/api/place/placeListAll`,"");
  }  
}



