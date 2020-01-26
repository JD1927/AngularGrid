import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class22Component } from './class22.component';

describe('Class22Component', () => {
  let component: Class22Component;
  let fixture: ComponentFixture<Class22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
