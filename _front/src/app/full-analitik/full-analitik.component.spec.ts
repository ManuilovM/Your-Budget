import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAnalitikComponent } from './full-analitik.component';

describe('FullAnalitikComponent', () => {
  let component: FullAnalitikComponent;
  let fixture: ComponentFixture<FullAnalitikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullAnalitikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAnalitikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
