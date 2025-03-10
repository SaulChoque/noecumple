import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-scroll-block',
  templateUrl: './scroll-block.component.html',
  styleUrls: ['./scroll-block.component.scss']
})
export class ScrollBlockComponent {

  // CONSTANTES IMAGENES
  PAGE1 = 'assets/images/png/page1.png';
  PAGE2 = 'assets/images/png/page2.png';
  PAGE3 = 'assets/images/png/page3.png';
  // VARIABLES IMAGENES
  contentImage = this.PAGE1;
  backImage = '';

  // CONSTANTES TEXTO
  PHRASE1 = 'Una niña cuyo corazón iluminó la vida de quienes la rodeaban';
  PHRASE2 = 'Los años pasaron como hojas en el viento, y ahora...';
  PHRASE3 = 'Esa niña ha florecido en una joven llena de gracia y belleza.';
  // VARIABLES TEXTO
  contentPhrase = this.PHRASE1;

  //CONSTANTES IMAGENES
  IMGPAGE1 = 'assets/images/backgrounds/bc1.png';
  IMGPAGE2 = 'assets/images/backgrounds/bc2.png';
  IMGPAGE3 = 'assets/images/backgrounds/bc3.jpg';

  private startY: number = 0;
  private currentPage: number = 1;
  private isAnimating: boolean = false; // Bandera para controlar la animación

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}

  ngOnInit() {
    AOS.init();
  }

  @HostListener('window:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const currentY = event.touches[0].clientY;
    if (this.startY - currentY > 50 && !this.isAnimating) { // Detecta un desplazamiento hacia arriba de más de 50px y verifica si no está animando
      console.log('Desplazamiento hacia arriba detectado');
      this.nextPage();
    }
  }

  nextPage() {
    this.isAnimating = true; // Establece la bandera de animación
    this.currentPage++;
    if (this.currentPage > 3) {
      this.router.navigate(['/d']); // Navega a la ruta '/d' después del tercer desplazamiento
      return;
    }
    this.updateImages();
    this.updateText();
    this.updateBackgroundImage(); // Llama a la función para actualizar la imagen de fondo
  }

  updateImages() {
    const pageElement = this.el.nativeElement.querySelector('.page');
    const cardElement = this.el.nativeElement.querySelector('.card');
    this.renderer.removeAttribute(pageElement, 'data-aos');
    this.renderer.removeAttribute(cardElement, 'data-aos');

    setTimeout(() => {
      switch (this.currentPage) {
        case 1:
          this.contentImage = this.PAGE1;
          break;
        case 2:
          this.contentImage = this.PAGE2;
          break;
        case 3:
          this.contentImage = this.PAGE3;
          break;
      }
      this.renderer.setAttribute(pageElement, 'data-aos', 'aos-page');
      this.renderer.setAttribute(cardElement, 'data-aos', 'aos-book');
      AOS.refresh(); // Refresca AOS para aplicar la animación nuevamente

      // Restablece la bandera de animación después de un breve retraso
      setTimeout(() => {
        this.isAnimating = false;
      }, 1000); // Ajusta el tiempo según la duración de tu animación
    }, 1000); // Espera 1 segundo antes de volver a agregar el atributo
  }

  updateText() {
    const textElement = this.el.nativeElement.querySelector('.textbook span h1');
    const textbookElement = this.el.nativeElement.querySelector('.textbook');
    this.renderer.removeAttribute(textbookElement, 'data-aos');

    setTimeout(() => {
      switch (this.currentPage) {
        case 1:
          this.contentPhrase = this.PHRASE1;
          break;
        case 2:
          this.contentPhrase = this.PHRASE2;
          break;
        case 3:
          this.contentPhrase = this.PHRASE3;
          break;
      }
      textElement.innerText = this.contentPhrase;
      this.renderer.setAttribute(textbookElement, 'data-aos', 'fade-zoom-in');
      AOS.refresh(); // Refresca AOS para aplicar la animación nuevamente
    }, 1000); // Espera 1 segundo antes de volver a agregar el atributo
  }

  updateBackgroundImage() {
    const backgroundImg = this.el.nativeElement.querySelector('#background-img');
    this.renderer.setAttribute(backgroundImg, 'id', 'background-img-static'); // Cambia el atributo id

    setTimeout(() => {
      switch (this.currentPage) {
        case 1:
          this.renderer.setAttribute(backgroundImg, 'src', this.IMGPAGE1);
          break;
        case 2:
          this.renderer.setAttribute(backgroundImg, 'src', this.IMGPAGE2);
          break;
        case 3:
          this.renderer.setAttribute(backgroundImg, 'src', this.IMGPAGE3);
          break;
      }
      this.renderer.setAttribute(backgroundImg, 'id', 'background-img'); // Vuelve a añadir el atributo id original
    }, 1000); // Espera 1 segundo antes de volver a agregar el atributo id original
  }
}
