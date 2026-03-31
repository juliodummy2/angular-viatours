import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrending } from './top-trending';

describe('TopTrending', () => {
  let component: TopTrending;
  let fixture: ComponentFixture<TopTrending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTrending],
    }).compileComponents();

    fixture = TestBed.createComponent(TopTrending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
