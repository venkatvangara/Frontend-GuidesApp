import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guidesdetaille } from './guidesdetaille';

describe('Guidesdetaille', () => {
  let component: Guidesdetaille;
  let fixture: ComponentFixture<Guidesdetaille>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guidesdetaille]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guidesdetaille);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
