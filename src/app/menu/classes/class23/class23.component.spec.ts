import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class23Component } from './class23.component';

describe('Class23Component', () => {
  let component: Class23Component;
  let fixture: ComponentFixture<Class23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
