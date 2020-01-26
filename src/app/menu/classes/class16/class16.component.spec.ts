import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class16Component } from './class16.component';

describe('Class16Component', () => {
  let component: Class16Component;
  let fixture: ComponentFixture<Class16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
