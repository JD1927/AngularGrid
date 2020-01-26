import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class10Component } from './class10.component';

describe('Class10Component', () => {
  let component: Class10Component;
  let fixture: ComponentFixture<Class10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
