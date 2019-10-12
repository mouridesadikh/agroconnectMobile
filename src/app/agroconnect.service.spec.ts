import { TestBed } from '@angular/core/testing';

import { AgroconnectService } from './agroconnect.service';

describe('AgroconnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgroconnectService = TestBed.get(AgroconnectService);
    expect(service).toBeTruthy();
  });
});
