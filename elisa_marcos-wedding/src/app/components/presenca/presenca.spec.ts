import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Presenca } from './presenca';

describe('Presenca', () => {
  let component: Presenca;
  let fixture: ComponentFixture<Presenca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Presenca],
    }).compileComponents();

    fixture = TestBed.createComponent(Presenca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
