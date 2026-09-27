import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Presentes } from './presentes';

describe('Presentes', () => {
  let component: Presentes;
  let fixture: ComponentFixture<Presentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Presentes],
    }).compileComponents();

    fixture = TestBed.createComponent(Presentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
