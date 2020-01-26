import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class14Component } from './class14.component';

describe('Class14Component', () => {
  let component: Class14Component;
  let fixture: ComponentFixture<Class14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
