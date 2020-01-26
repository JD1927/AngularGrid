import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class13Component } from './class13.component';

describe('Class13Component', () => {
  let component: Class13Component;
  let fixture: ComponentFixture<Class13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
