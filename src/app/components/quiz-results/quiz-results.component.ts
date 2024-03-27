import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/Quiz';
import { map } from 'rxjs/operators';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
 selector: 'app-quiz-results',
 templateUrl: './quiz-results.component.html',
 styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit {
  quiz!: Quiz;
  results!: any[];
  score!: number;
  faTimes = faTimes;
  faCheck = faCheck;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
    .subscribe(state => {
      if (state) {
        this.quiz = state.quiz;
        this.results = state.results;
        this.score = state.score;
      }
    });
  }
}