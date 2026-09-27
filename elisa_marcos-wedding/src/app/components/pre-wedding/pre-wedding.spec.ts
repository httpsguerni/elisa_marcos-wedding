import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreWedding } from './pre-wedding';

describe('PreWedding', () => {
  let component: PreWedding;
  let fixture: ComponentFixture<PreWedding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreWedding],
    }).compileComponents();

    fixture = TestBed.createComponent(PreWedding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
