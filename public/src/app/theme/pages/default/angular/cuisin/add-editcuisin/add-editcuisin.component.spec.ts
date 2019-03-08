import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcuisinComponent } from './add-editcuisin.component';

describe('AddEditcuisinComponent', () => {
  let component: AddEditcuisinComponent;
  let fixture: ComponentFixture<AddEditcuisinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditcuisinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditcuisinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
