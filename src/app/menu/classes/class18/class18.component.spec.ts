import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class18Component } from './class18.component';

describe('Class18Component', () => {
  let component: Class18Component;
  let fixture: ComponentFixture<Class18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
