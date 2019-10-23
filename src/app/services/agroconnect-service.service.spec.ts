import { TestBed } from '@angular/core/testing';

import { AgroconnectServiceService } from './agroconnect-service.service';

describe('AgroconnectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgroconnectServiceService = TestBed.get(AgroconnectServiceService);
    expect(service).toBeTruthy();
  });
});
