import { TestBed } from '@angular/core/testing';

import { ContentOffsetService } from './content-offset.service';

describe('ContentOffsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentOffsetService = TestBed.get(ContentOffsetService);
    expect(service).toBeTruthy();
  });
});
