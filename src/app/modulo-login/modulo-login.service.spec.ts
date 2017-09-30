import { TestBed, inject } from '@angular/core/testing';

import { ModuloLoginService } from './modulo-login.service';

describe('ModuloLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuloLoginService]
    });
  });

  it('should be created', inject([ModuloLoginService], (service: ModuloLoginService) => {
    expect(service).toBeTruthy();
  }));
});
