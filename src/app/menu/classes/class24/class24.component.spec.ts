import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class24Component } from './class24.component';

describe('Class24Component', () => {
  let component: Class24Component;
  let fixture: ComponentFixture<Class24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
