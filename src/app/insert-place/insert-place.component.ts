import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-insert-place',
  templateUrl: './insert-place.component.html',
  styleUrls: ['./insert-place.component.scss']
})
export class InsertPlaceComponent implements OnInit {
  // name : String;
  // lat : Number;
  // lon : Number;
  // openTime : String;
  // closeTime : String;
  // tel : String;
  // menu : File;
  // detail : String;

  insertPlaceForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiservice : ApiService) {
    
      this.createForm();
  }

  createForm() {
    this.insertPlaceForm = this.formBuilder.group({
      placeName: ["lalala"],
      lat: [50.00],
      lng: [60.00],
      openTime: [''],
      closeTime: [''],
      tel: [''],
      menu: [''],
      detail: ['']
    });
  }

  

  onSubmit(insertPlaceForm : any){
    console.log(insertPlaceForm);

    let body = {name:'lalala',lat:30.5,lng:40.5}
    let result = this.apiservice.registerPlace(body);
    console.log(result);
  }

  ngOnInit() {
  }

}
