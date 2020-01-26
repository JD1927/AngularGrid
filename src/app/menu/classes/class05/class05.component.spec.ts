import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class05Component } from './class05.component';

describe('Class05Component', () => {
  let component: Class05Component;
  let fixture: ComponentFixture<Class05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
