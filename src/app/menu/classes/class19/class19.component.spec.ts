import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class19Component } from './class19.component';

describe('Class19Component', () => {
  let component: Class19Component;
  let fixture: ComponentFixture<Class19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
