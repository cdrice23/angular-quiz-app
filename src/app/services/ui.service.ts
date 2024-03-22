import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddQuiz: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddQuiz(): void {
    this.showAddQuiz = !this.showAddQuiz;
    this.subject.next(this.showAddQuiz);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}