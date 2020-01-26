import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class07Component } from './class07.component';

describe('Class07Component', () => {
  let component: Class07Component;
  let fixture: ComponentFixture<Class07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
