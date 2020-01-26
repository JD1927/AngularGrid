import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class21Component } from './class21.component';

describe('Class21Component', () => {
  let component: Class21Component;
  let fixture: ComponentFixture<Class21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
