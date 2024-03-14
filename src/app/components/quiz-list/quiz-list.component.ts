import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz, QuizQuestion, QuizQuestionType } from '../../models/Quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent implements OnInit {
  quizList: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizList().subscribe((quizList) => (this.quizList = quizList));
  
  }

  deleteQuiz(quiz: Quiz) {
    this.quizService
      .deleteQuiz(quiz)
      .subscribe(
        () => (this.quizList = this.quizList.filter((q) => q.id !== quiz.id))
      );
  }

  addQuiz(quiz: Quiz) {
    this.quizService.addQuiz(quiz).subscribe((quiz) => this.quizList.push(quiz));
  }

  // TODO: toggle for update quiz?

}

