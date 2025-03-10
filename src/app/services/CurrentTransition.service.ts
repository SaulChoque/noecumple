import { inject, Injectable, signal } from '@angular/core';
import { ViewTransitionInfo } from '@angular/router';

//Se define un servicio CurrentTransitionService que utiliza un signal para mantener el estado de la transición actual.
// Este servicio se inyecta en los componentes para acceder a la información de la transición.
@Injectable({
  providedIn: 'root',
})
export class CurrentTransitionService {
  readonly currentTransition = signal<ViewTransitionInfo | null>(null);
}


// La función onViewTransitionCreated se llama cuando se crea una nueva transición de vista.
// Esta función actualiza el estado de la transición actual en el servicio CurrentTransitionService.
export function onViewTransitionCreated(info: ViewTransitionInfo) {
  const currentTransitionService = inject(CurrentTransitionService);
  currentTransitionService.currentTransition.set(info);
  info.transition.finished.finally(() => {
    currentTransitionService.currentTransition.set(null);
  });
}
