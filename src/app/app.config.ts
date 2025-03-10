import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes, withViewTransitions, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CurrentTransitionService, onViewTransitionCreated } from './services/CurrentTransition.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

  //Configuración del Router: El Router se configura en la función bootstrapApplication, donde se proporcionan las rutas y se habilitan las transiciones de vista con withViewTransitions.
  providers:
  [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions({ onViewTransitionCreated })),
  ]
};
