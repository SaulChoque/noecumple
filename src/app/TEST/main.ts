import 'zone.js';
import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  Router,
  RouterLink,
  RouterOutlet,
  Routes,
  withViewTransitions,
} from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
      <main class="content">
      <h1 class="content-title">Page 1</h1>
      <p>This is the content for page 1.</p>
      <p>Why not check out <a routerLink="/page-2">page 2</a>?</p>
    </main>
  `,
})
export class Page1 {}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
     <div class="content-and-nav">
      <main class="content">
        <h1 class="content-title">Page 2</h1>
        <p>This is the content for page 2.</p>
        <ol>
          <li>It</li>
          <li>also</li>
          <li>has</li>
          <li>a</li>
          <li>list!</li>
        </ol>
        <p>Ok, that's enough fun, you can go back to <a routerLink="/">page 1</a>, or date you carry on to <a routerLink="/page-3">page 3</a>?</p>
      </main>
      <nav class="main-nav">
        <ul>
          <li><a routerLink="/">Page 1</a></li>
          <li><a routerLink="/page-2">Page 2</a></li>
          <li><a routerLink="/page-3">Page 3</a></li>
        </ul>
      </nav>
    </div>
  `,
})
export class Page2 {}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="content-and-nav">
      <main class="content">
        <h1 class="content-title">Page 3</h1>
        <p>This is the content for page 3.</p>
        <p>And that's it!</p>
      </main>
      <nav class="main-nav">
        <ul>
          <li><a routerLink="/">Page 1</a></li>
          <li><a routerLink="/page-2">Page 2</a></li>
          <li><a routerLink="/page-3">Page 3</a></li>
        </ul>
      </nav>
    </div>
  `,
})
export class Page3 {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
   <header class="main-header">
      @if (router.url !== '/') {
        <a routerLink="/" class="back-and-title">
          <svg class="back-icon" viewBox="0 0 24 24"><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>
          <span class="main-header-text">Demo site</span>
        </a>
      } @else {
        <span class="main-header-text">Demo site</span>
      }
  </header>
  <router-outlet></router-outlet>
  `,
})
export class App {
  router = inject(Router);
}

export const routes: Routes = [
  {
    path: '',
    component: Page1,
  },
  {
    path: 'page-2',
    component: Page2,
  },
  {
    path: 'page-3',
    component: Page3,
  },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes, withViewTransitions())],
});
