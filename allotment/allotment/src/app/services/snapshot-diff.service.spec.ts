import { TestBed } from '@angular/core/testing';

import { SnapshotDiffService } from './snapshot-diff.service';

describe('SnapshotDiffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnapshotDiffService = TestBed.get(SnapshotDiffService);
    expect(service).toBeTruthy();
  });
});
