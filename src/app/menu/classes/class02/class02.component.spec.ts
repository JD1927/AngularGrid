import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class02Component } from './class02.component';

describe('Class02Component', () => {
  let component: Class02Component;
  let fixture: ComponentFixture<Class02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
