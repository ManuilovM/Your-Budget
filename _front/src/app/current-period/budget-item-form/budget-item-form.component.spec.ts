import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemFormComponent } from './budget-item-form.component';

xdescribe('BudgetItemFormComponent', () => {
  let component: BudgetItemFormComponent;
  let fixture: ComponentFixture<BudgetItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
