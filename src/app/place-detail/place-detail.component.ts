import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  private place;

  constructor(private route: ActivatedRoute) { 
    //this.place = route.snapshot.params['place'];
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      console.log('here');
      });   
  }



}
