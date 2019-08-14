import { TestBed } from '@angular/core/testing';

import { DatosApiService } from './datos-api.service';

describe('DatosApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosApiService = TestBed.get(DatosApiService);
    expect(service).toBeTruthy();
  });
});
