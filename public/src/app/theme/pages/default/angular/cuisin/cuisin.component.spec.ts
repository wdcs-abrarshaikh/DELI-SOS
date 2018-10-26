import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinComponent } from './cuisin.component';

describe('CuisinComponent', () => {
  let component: CuisinComponent;
  let fixture: ComponentFixture<CuisinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
