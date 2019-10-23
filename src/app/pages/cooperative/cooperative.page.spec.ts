import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativePage } from './cooperative.page';

describe('CooperativePage', () => {
  let component: CooperativePage;
  let fixture: ComponentFixture<CooperativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
