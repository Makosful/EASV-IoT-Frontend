import { TestBed } from '@angular/core/testing';

import { SensorService } from './sensor.service';

describe('DataServiceService', () => {
  let service: SensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
