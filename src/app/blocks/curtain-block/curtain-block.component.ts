import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curtain-block',
  imports: [],
  templateUrl: './curtain-block.component.html',
  styleUrl: './curtain-block.component.scss'
})
export class CurtainBlockComponent {
  private startY: number = 0;
  private scrollCount: number = 0;
  private animationDuration: number = 2000; // Duración de la animación en milisegundos
  private isAnimating: boolean = false; // Bandera para controlar la animación

  constructor(private router: Router, private renderer: Renderer2) {}

  @HostListener('window:touchstart', ['$event'])
  onWindowTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }

  @HostListener('window:touchmove', ['$event'])
  onWindowTouchMove(event: TouchEvent) {
    const currentY = event.touches[0].clientY;
    if (this.startY - currentY > 50 && !this.isAnimating) { // Detecta un desplazamiento hacia arriba de más de 50px y verifica si no está animando
      this.scrollCount++;
      if (this.scrollCount === 1) {
        console.log('Primer desplazamiento hacia arriba detectado');
        const rnInnerElement = document.querySelector('.rnInner');
        const textCurtainContainer = document.querySelector('.text-curtain-container');
        if (rnInnerElement) {
          this.isAnimating = true; // Establece la bandera de animación
          this.renderer.setAttribute(rnInnerElement, 'id', 'curtainAnim');
          this.renderer.setAttribute(textCurtainContainer, 'id', 'curtainAnim');
          setTimeout(() => {
            this.isAnimating = false; // Restablece la bandera de animación después de la duración de la animación
          }, this.animationDuration);
        }
      } else if (this.scrollCount === 2) {
        console.log('Segundo desplazamiento hacia arriba detectado');
        this.router.navigate(['/c']); // Cambia '/c' por la ruta a la que deseas navegar
      }
    }
  }
}
