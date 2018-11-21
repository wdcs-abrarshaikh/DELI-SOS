import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrestaurantComponent } from './viewrestaurant.component';

describe('ViewrestaurantComponent', () => {
  let component: ViewrestaurantComponent;
  let fixture: ComponentFixture<ViewrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
