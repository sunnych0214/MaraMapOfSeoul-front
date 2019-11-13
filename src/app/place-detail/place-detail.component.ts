import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  private uuid;

  constructor(private route: ActivatedRoute) {
    this.uuid = this.route.snapshot.params['place'];
  }

  ngOnInit() {
    console.log(this.uuid);
  }



}

