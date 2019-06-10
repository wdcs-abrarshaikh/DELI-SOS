import { TestBed, inject } from '@angular/core/testing';

import { CuisinService } from './cuisin.service';

describe('CuisinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuisinService]
    });
  });

  it('should be created', inject([CuisinService], (service: CuisinService) => {
    expect(service).toBeTruthy();
  }));
});
