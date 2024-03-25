import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItemSummaryComponent } from './quiz-item-summary.component';

describe('QuizItemComponent', () => {
  let component: QuizItemSummaryComponent;
  let fixture: ComponentFixture<QuizItemSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizItemSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizItemSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
