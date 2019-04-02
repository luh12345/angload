import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngLoadComponent } from './ang-load.component';

describe('AngLoadComponent', () => {
  let component: AngLoadComponent;
  let fixture: ComponentFixture<AngLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
