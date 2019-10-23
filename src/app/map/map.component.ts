import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    $(document).on('click','.subway__station', function(){
      var station = $(this);
      var transferId = station.attr('data-transfer-id');
      var svg = station.closest('svg');
      var isSelected = station.attr('class').indexOf("is-selected") > -1;
      var elements;
      if(transferId)
        elements = $(this).add(svg.find('[data-transfer-id="'+transferId+'"]'));
      else
        elements = station;
      if(isSelected)
        elements.attr('class','subway__station');
      else
        elements.attr('class','subway__station is-selected');
    });
  }
}
