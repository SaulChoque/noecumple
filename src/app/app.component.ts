import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'noeliacumple';

  router = inject(Router);

  @ViewChild('backgroundAudio') backgroundAudio!: ElementRef<HTMLAudioElement>;

  ngOnInit() {
    // Código de inicialización si es necesario
  }

  ngAfterViewInit() {
    // Espera a que el usuario interactúe con la página para reproducir el audio
    document.addEventListener('click', this.playAudio.bind(this), { once: true });
  }

  playAudio() {
    this.backgroundAudio.nativeElement.play().catch(error => {
      console.error('Error al reproducir el audio:', error);
    });
  }

  /*
  @HostListener('window:touchstart', ['$event'])
  onWindowTouch(event: TouchEvent) {
    console.log('Pantalla tocada');
    this.router.navigate(['/b']); // Cambia '/nueva-ruta' por la ruta a la que deseas navegar
  }
  */
}
