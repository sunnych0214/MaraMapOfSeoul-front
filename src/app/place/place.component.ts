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
    
  }

  public open(event, item) {
    alert('Open ' + item);
  }

}
