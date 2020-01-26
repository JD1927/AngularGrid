import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class17Component } from './class17.component';

describe('Class17Component', () => {
  let component: Class17Component;
  let fixture: ComponentFixture<Class17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
