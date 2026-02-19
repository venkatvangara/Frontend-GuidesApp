import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideslist } from './guideslist';

describe('Guideslist', () => {
  let component: Guideslist;
  let fixture: ComponentFixture<Guideslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideslist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideslist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
