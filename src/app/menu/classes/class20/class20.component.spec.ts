import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class20Component } from './class20.component';

describe('Class20Component', () => {
  let component: Class20Component;
  let fixture: ComponentFixture<Class20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
