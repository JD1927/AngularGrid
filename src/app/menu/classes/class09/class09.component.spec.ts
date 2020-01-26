import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class09Component } from './class09.component';

describe('Class09Component', () => {
  let component: Class09Component;
  let fixture: ComponentFixture<Class09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
