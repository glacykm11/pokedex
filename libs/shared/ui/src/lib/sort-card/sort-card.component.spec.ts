import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortCardComponent } from './sort-card.component';

describe('SortCardComponent', () => {
  let component: SortCardComponent;
  let fixture: ComponentFixture<SortCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
