import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPlaceComponent } from './insert-place.component';

describe('InsertPlaceComponent', () => {
  let component: InsertPlaceComponent;
  let fixture: ComponentFixture<InsertPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
