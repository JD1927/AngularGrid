import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class08Component } from './class08.component';

describe('Class08Component', () => {
  let component: Class08Component;
  let fixture: ComponentFixture<Class08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
