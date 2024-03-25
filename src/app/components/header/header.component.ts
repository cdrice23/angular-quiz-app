import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddQuiz: boolean = false;
  isHome: boolean = false;
  isQuiz: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddQuiz = value));
  }

  ngOnInit(): void {
    this.checkIfHomeRoute();
    this.checkIfQuizRoute();
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfHomeRoute();
      this.checkIfQuizRoute();
    });
 }
  
   ngOnDestroy() {
     // Unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
   }

  toggleAddQuiz() {
    this.uiService.toggleAddQuiz();
  }

  checkIfHomeRoute() {
    this.isHome = this.router.url === '/';
  }

  checkIfQuizRoute() {
    this.isQuiz = this.router.url.includes('/quiz');
 }

  navigateToHome() {
    this.router.navigate(['/']);
 }
}