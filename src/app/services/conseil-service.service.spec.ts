import { TestBed } from '@angular/core/testing';

import { ConseilServiceService } from './conseil-service.service';

describe('ConseilServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConseilServiceService = TestBed.get(ConseilServiceService);
    expect(service).toBeTruthy();
  });
});
