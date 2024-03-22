import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './pages/about/about.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { AnswersComponent } from './components/answers/answers.component';
import { QuizDetailComponent } from './components/quiz-detail/quiz-detail.component';


// export const appRoutes: Routes = [
//     { path: '', component: TasksComponent },
//     { path: 'about', component: AboutComponent },
//   ];

export const appRoutes: Routes = [
    { path: '', component: QuizListComponent },
    { path: 'quiz/:id', component: QuizDetailComponent },
    { path: 'quiz/:id/results', component: QuizResultsComponent },
    { path: 'answers/:id', component: AnswersComponent },
   ];
