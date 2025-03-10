import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-block',
  imports: [],
  templateUrl: './opening-block.component.html',
  styleUrls: ['./opening-block.component.scss']
})
export class OpeningBlockComponent {
  constructor(private router: Router) {}

  @HostListener('window:touchstart', ['$event'])
  onWindowTouch(event: TouchEvent) {
    console.log('Pantalla tocada');
    this.router.navigate(['/b']); // Cambia '/b' por la ruta a la que deseas navegar
  }
}
