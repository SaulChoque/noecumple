import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routeTransition } from './animations/route-transition';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransition]
})
export class AppComponent {
  title = 'noeliacumple';

  router = inject(Router);

  /*
  @HostListener('window:touchstart', ['$event'])
  onWindowTouch(event: TouchEvent) {
    console.log('Pantalla tocada');
    this.router.navigate(['/b']); // Cambia '/nueva-ruta' por la ruta a la que deseas navegar
  }
*/
}
