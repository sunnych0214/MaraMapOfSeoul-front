import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  placesByStar;
  
  constructor(private apiService : ApiService) { } 

  public placeListByStation(stationName){
    this.apiService.placeListByStation(stationName).subscribe((data)=>{
      console.log(data);
      this.placesByStar = data;
    });
  }

  ngOnInit() {
    
    document.getElementById('place_wrap').classList.remove('selected');
    document.getElementById('map_wrap').classList.add('selected');
    
    this.apiService.placeListByStarDown().subscribe((data)=>{
      console.log(data);
      this.placesByStar = data;
    });
    
    var saveThis = this;
    $(".subway__line").on('click','.subway__station', function(){
      var station = $(this);
      var svg = station.closest('svg');
      var isSelected = station.attr('class').indexOf("is-selected") > -1;
      var elements = station;
      if(isSelected)
        elements.attr('class','subway__station');
      else{
        var stationName = station.attr('id');
        saveThis.placeListByStation(stationName);
        $(".subway__line .subway__station").attr('class','subway__station');
        elements.attr('class','subway__station is-selected');
      }

    });
  }

  
}
