import { TestBed } from '@angular/core/testing';

import { StreamServeService } from './stream-serve.service';

describe('StreamServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreamServeService = TestBed.get(StreamServeService);
    expect(service).toBeTruthy();
  });
});
