import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { AnswersComponent } from './components/answers/answers.component';
import { QuizDetailComponent } from './components/quiz-detail/quiz-detail.component';
import { QuizItemSummaryComponent } from './components/quiz-item-summary/quiz-item-summary.component';

import { appRoutes } from './app.routes';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    AddQuizComponent,
    QuizListComponent,
    QuizResultsComponent,
    AnswersComponent,
    QuizDetailComponent,
    QuizItemSummaryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}