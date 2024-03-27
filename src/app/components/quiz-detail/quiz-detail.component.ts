import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz, QuizQuestion, QuizQuestionType } from '../../models/Quiz';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrl: './quiz-detail.component.scss'
})
export class QuizDetailComponent implements OnInit {
  quiz!: Quiz;
  quizForm!: FormGroup;
  QuizQuestionType = QuizQuestionType;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quizService.getQuizById(id).subscribe(quiz => {
      this.quiz = quiz;
      this.createQuizForm();
      console.log(this.quiz)
    });

  }
  

  createQuizForm(): void {
    const formControls = this.quiz.questions.reduce<Record<string, FormControl>>((acc, question) => {
       acc[question.id.toString()] = this.fb.control('');
       return acc;
    }, {});
   
    this.quizForm = this.fb.group(formControls);
   }


  onSubmit(): void {
    const userAnswers = this.quizForm.value;
    let score = 0;
    const results = this.quiz.questions.map(question => {
        const userAnswer = userAnswers[question.id.toString()];
        const isCorrect = typeof question.correctAnswer === "boolean" ? question.correctAnswer === userAnswer : question.correctAnswer?.toLowerCase() === userAnswer.toLowerCase();
        if (isCorrect) score++;
        return {
          question: question.text,
          userAnswer,
          correctAnswer: question.correctAnswer,
          isCorrect
        };
    });

    this.router.navigate(['/quiz', this.quiz.id, 'results'], { state: { quiz: this.quiz, results, score } });
  }
}
