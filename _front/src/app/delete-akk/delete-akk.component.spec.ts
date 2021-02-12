import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAkkComponent } from './delete-akk.component';

describe('DeleteAkkComponent', () => {
  let component: DeleteAkkComponent;
  let fixture: ComponentFixture<DeleteAkkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAkkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
