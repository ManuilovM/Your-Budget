import { TestBed } from '@angular/core/testing';

import { BudgetItemsService } from './budget-items.service';

describe('BudgetItemsService', () => {
  let service: BudgetItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetItemsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
