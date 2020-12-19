import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPeriodComponent } from './current-period.component';

describe('CurrentPeriodComponent', () => {
  let component: CurrentPeriodComponent;
  let fixture: ComponentFixture<CurrentPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
