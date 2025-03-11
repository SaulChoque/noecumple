import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions, withComponentInputBinding } from '@angular/router';
import { onViewTransitionCreated } from './services/CurrentTransition.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

  //Configuración del Router: El Router se configura en la función bootstrapApplication, donde se proporcionan las rutas y se habilitan las transiciones de vista con withViewTransitions.
  providers:
  [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions({ onViewTransitionCreated })),
  ]
};
