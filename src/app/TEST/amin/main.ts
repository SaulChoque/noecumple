import 'zone.js';
import { Component, inject, Injectable, Input, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
ActivatedRouteSnapshot,
  provideRouter,
  Router,
  RouterLink,
  RouterOutlet,
  Routes,
  ViewTransitionInfo,
  withViewTransitions,
  withComponentInputBinding
} from '@angular/router';
import { TitleCasePipe } from '@angular/common';

interface CatData {
  name: string;
  image: string;
  thumb: string;
  alt: string;
  description: string;
}
const catData = new Map<string, CatData>;
catData.set('senna', {
  name: 'senna',
  image:
    'https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/senna-large.jpg?v=1658763217969',
    thumb: 'https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/senna-thumb.jpg?v=1658763217087',
  alt: `A black cat standing next to another black cat, who's lying on the floor`,
  description: `<p>Kimi always looks sad or scared, but he isn't.</p>
  <p>He started off as the lighter of the two cats, but he has overcome this through eating too much.</p>
  <p>He once lived up a tree for 6 days.</p>`,
});
catData.set('kimi', {
  name: 'kimi',
  image:
    'https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/kimi-large.jpg?v=1658763217382',
    thumb: 'https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/kimi-thumb.jpg?v=1658763216756',
  alt: `A black cat hiding under a chimnea`,
  description: `<p>Senna has a pointier face than Kimi, and his meow is much louder.</p>
  <p>Much louder.</p>
  <p>It's annoying.</p>`,
});

@Component({
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  template: `
    <main class="content">
      <h1 class="content-title">Some cats</h1>
      <ul class="gallery">
        @for (cat of cats; track cat.name) {
          <li>
            <a [routerLink]="['/cats', cat.name]">
            <img [style.viewTransitionName]="viewTransitionName(cat)" [src]="cat.thumb" [alt]="cat.alt" />
              <span class="gallery-item-title">{{cat.name | titlecase}}</span>
            </a>
          </li>
        }
      </ul>
    </main>`,
})
export class Home {
  cats = Array.from(catData.values());
  transitionService = inject(CurrentTransitionService);
  viewTransitionName(cat: CatData) {
    const transition = this.transitionService.currentTransition();
    // If we're transitioning to or from the cat's detail page, add the `banner-image` transition name.
    // This allows the browser to animate between the specific cat image from the list and its image on the detail page.
    const isBannerImg = transition?.to.firstChild?.params['name'] === cat.name || transition?.from.firstChild?.params['name'] === cat.name;  
    return isBannerImg ? 'banner-img' : '';
  }
  
}

@Component({
  standalone: true,
  imports: [TitleCasePipe],
  template: `
     <main>
      <div class="banner-img">
        <img [src]="cat.image" [alt]="cat.alt" width="2340" height="1316" />
      </div>
      <div class="content">
        <h1 class="content-title">{{cat.name | titlecase}}</h1>
        <div [innerHTML]="cat.description"></div>
      </div>
    </main>
  `,
})
export class Cat {
  @Input() cat!: CatData;
}

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
    component: Home,
  },
  {
    path: 'cats/:name',
    component: Cat,
    resolve: {
      cat: (route: ActivatedRouteSnapshot) => 
         catData.get(route.params['name'])
      ,
    },
  },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions({ onViewTransitionCreated })),
  ],
});

function onViewTransitionCreated(info: ViewTransitionInfo) {
  const currentTransitionService = inject(CurrentTransitionService);
  currentTransitionService.currentTransition.set(info);
  // Update current transition when animation finishes
  info.transition.finished.finally(() => {
    currentTransitionService.currentTransition.set(null);
  });
}

@Injectable({
  providedIn: 'root',
})
export class CurrentTransitionService {
  readonly currentTransition = signal<ViewTransitionInfo | null>(null);
}
