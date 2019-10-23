import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service'
// import { daum } from '../'

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
      name: ["lalala"],
      lat: [50.00],
      lng: [60.00],
      open_time: [''],
      close_time: [''],
      tel: [''],
      menu: [''],
      detail: ['']
    });
  }

  

  onSubmit(insertPlaceForm : any){
    console.log(insertPlaceForm);
    let result = this.apiservice.registerPlace(insertPlaceForm);
  }

  
  // findPostCodePopUp(){
  //   daum.postcode.load(function(){
  //         new daum.Postcode({
  //             oncomplete: function(data) {
  //                 // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
  //                 // 예제를 참고하여 다양한 활용법을 확인해 보세요.
  //             }
  //         }).open();
  //     });
  // }

  ngOnInit() {
  }

}
