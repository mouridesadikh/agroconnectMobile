import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceDetaillePage } from './annonce-detaille.page';

describe('AnnonceDetaillePage', () => {
  let component: AnnonceDetaillePage;
  let fixture: ComponentFixture<AnnonceDetaillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceDetaillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceDetaillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
