import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFormation } from './div-formation';

describe('DivFormation', () => {
  let component: DivFormation;
  let fixture: ComponentFixture<DivFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivFormation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivFormation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
