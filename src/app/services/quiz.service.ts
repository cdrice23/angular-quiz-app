import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz, QuizQuestion, QuizQuestionType } from '../models/Quiz';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:5500/quizzes';

  constructor(private http: HttpClient) {}

  getQuizList(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.apiUrl);
  }

  getQuizById(id: string | null): Observable<Quiz> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Quiz>(url);
   }

  deleteQuiz(quiz: Quiz): Observable<Quiz> {
    const url = `${this.apiUrl}/${quiz.id}`;
    return this.http.delete<Quiz>(url);
  }

  updateQuiz(quiz: Quiz): Observable<Quiz> {
    const url = `${this.apiUrl}/${quiz.id}`;
    return this.http.put<Quiz>(url, quiz, httpOptions);
  }

  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.apiUrl, quiz, httpOptions);
  }
}
