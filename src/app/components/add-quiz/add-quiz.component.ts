import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Quiz, QuizQuestion } from '../../models/Quiz';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.scss'
})
export class AddQuizComponent implements OnInit {
  @Output() onAddQuiz: EventEmitter<Quiz> = new EventEmitter();
  title!: string;
  description!: string;
  questions!: QuizQuestion[];
  showAddQuiz!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddQuiz = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.title) {
      alert('Please add a title.');
      return;
    }

    if (!this.title) {
      alert('Please add a title.');
      return;
    }

    const newQuiz: Quiz = {
      title: this.title,
      questions: this.questions,
      description: this.description,
    };

    this.onAddQuiz.emit(newQuiz);

    this.title = '';
    this.questions = [];
    this.description = '';
  }
}