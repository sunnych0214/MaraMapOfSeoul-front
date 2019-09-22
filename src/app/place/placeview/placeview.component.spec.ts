import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceviewComponent } from './placeview.component';

describe('PlaceviewComponent', () => {
  let component: PlaceviewComponent;
  let fixture: ComponentFixture<PlaceviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
