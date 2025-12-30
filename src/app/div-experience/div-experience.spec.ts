import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivExperience } from './div-experience';

describe('DivExperience', () => {
  let component: DivExperience;
  let fixture: ComponentFixture<DivExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
