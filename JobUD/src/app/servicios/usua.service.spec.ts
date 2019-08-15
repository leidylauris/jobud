import { TestBed } from '@angular/core/testing';

import { UsuaService } from './usua.service';

describe('UsuaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuaService = TestBed.get(UsuaService);
    expect(service).toBeTruthy();
  });
});
