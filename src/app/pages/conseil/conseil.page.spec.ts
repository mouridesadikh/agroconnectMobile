import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilPage } from './conseil.page';

describe('ConseilPage', () => {
  let component: ConseilPage;
  let fixture: ComponentFixture<ConseilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
