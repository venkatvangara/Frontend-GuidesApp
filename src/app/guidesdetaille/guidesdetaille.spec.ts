import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuidesdetailleComponent } from './guidesdetaille.component';

describe('GuidesdetailleComponent', () => {
  let component: GuidesdetailleComponent;
  let fixture: ComponentFixture<GuidesdetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidesdetailleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GuidesdetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
