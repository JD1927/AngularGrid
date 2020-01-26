import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class03Component } from './class03.component';

describe('Class03Component', () => {
  let component: Class03Component;
  let fixture: ComponentFixture<Class03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
