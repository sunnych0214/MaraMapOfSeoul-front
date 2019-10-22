import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.insertPlaceForm = this.formBuilder.group({
      placeName: ['']
    });
  }

  

  onSubmit(placeName : String){
    //alert('Place name is : ' + placeName);
  }

  ngOnInit() {
  }

}
