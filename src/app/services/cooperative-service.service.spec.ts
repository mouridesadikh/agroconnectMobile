import { TestBed } from '@angular/core/testing';

import { CooperativeServiceService } from './cooperative-service.service';

describe('CooperativeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CooperativeServiceService = TestBed.get(CooperativeServiceService);
    expect(service).toBeTruthy();
  });
});
