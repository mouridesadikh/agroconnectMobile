import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcheVirtuelPage } from './marche-virtuel.page';

describe('MarcheVirtuelPage', () => {
  let component: MarcheVirtuelPage;
  let fixture: ComponentFixture<MarcheVirtuelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcheVirtuelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcheVirtuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
