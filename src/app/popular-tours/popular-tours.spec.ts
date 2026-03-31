import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTours } from './popular-tours';

describe('PopularTours', () => {
  let component: PopularTours;
  let fixture: ComponentFixture<PopularTours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularTours],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularTours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
