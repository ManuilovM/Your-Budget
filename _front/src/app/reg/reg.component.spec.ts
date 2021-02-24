import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegComponent } from './reg.component';

xdescribe('RegComponent', () => {
  let component: RegComponent;
  let fixture: ComponentFixture<RegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
