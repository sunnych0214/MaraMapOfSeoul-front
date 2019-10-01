import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project'; 
  lat = 51.678418;
  lng = 7.809007;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    document.getElementById('map_wrap').classList.add('selected');
    document.getElementById('place_wrap').classList.remove('selected');
  }
}
