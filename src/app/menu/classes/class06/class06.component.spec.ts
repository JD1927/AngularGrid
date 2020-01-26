import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class06Component } from './class06.component';

describe('Class06Component', () => {
  let component: Class06Component;
  let fixture: ComponentFixture<Class06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
