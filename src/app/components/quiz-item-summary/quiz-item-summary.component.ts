import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../../models/Quiz';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz-item-summary',
  templateUrl: './quiz-item-summary.component.html',
  styleUrl: './quiz-item-summary.component.scss'
})
export class QuizItemSummaryComponent implements OnInit {
  @Input() quiz!: Quiz;
  @Output() onDeleteQuiz: EventEmitter<Quiz> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(quiz: Quiz) {
    this.onDeleteQuiz.emit(quiz);
  }
}