import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTourz } from './why-tourz';

describe('WhyTourz', () => {
  let component: WhyTourz;
  let fixture: ComponentFixture<WhyTourz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyTourz],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyTourz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
