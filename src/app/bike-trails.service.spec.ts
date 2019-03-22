import { TestBed } from '@angular/core/testing';

import { BikeTrailsService } from './bike-trails.service';

describe('BikeTrailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeTrailsService = TestBed.get(BikeTrailsService);
    expect(service).toBeTruthy();
  });
});
