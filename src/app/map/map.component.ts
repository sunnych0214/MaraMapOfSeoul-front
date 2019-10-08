import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

declare let Kakao:any;			// ← 추가

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    var container = document.getElementById('map');
		var options = {
			center: new Kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		var map = new Kakao.maps.Map(container, options);
  }
}
