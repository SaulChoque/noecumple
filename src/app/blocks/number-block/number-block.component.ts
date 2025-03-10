import { Component, OnInit, Renderer2, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CurrentTransitionService } from '../../services/CurrentTransition.service';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-number-block',
  templateUrl: './number-block.component.html',
  styleUrls: ['./number-block.component.scss']
})
export class NumberBlockComponent implements OnInit {

  transitionService = inject(CurrentTransitionService);

  viewTransitionName() {
    const transition = this.transitionService.currentTransition();
    // Customize the transition name logic as needed
    const isNumberBlock = transition?.to.firstChild?.routeConfig?.path === 'number-block' || transition?.from.firstChild?.routeConfig?.path === 'number-block';
    return isNumberBlock ? 'number-block-transition' : '';
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private appStateService: AppStateService
  ) {}

  ngOnInit() {
    AOS.init();
    if (this.appStateService.getIsPageReloaded()) {
      this.router.navigate(['']); // Redirige a la ruta raíz
      this.appStateService.resetPageReloadedFlag();
    }
    this.changeAosAttribute();
    this.navigateToRoute();
  }

  changeAosAttribute() {
    setTimeout(() => {
      const numberFourElement = this.el.nativeElement.querySelector('.number-four');
      const numberFiveElement = this.el.nativeElement.querySelector('.number-five');
      const flameImgElement = this.el.nativeElement.querySelector('.flameImg');
      this.renderer.setAttribute(numberFourElement, 'data-aos', 'numberFourSecond');
      this.renderer.setAttribute(numberFiveElement, 'data-aos', 'numberFiveSecond');
      this.renderer.setAttribute(flameImgElement, 'data-aos', 'flameImgg');
      AOS.refresh(); // Refresca AOS para aplicar la animación nuevamente
    }, 1000); // Espera 1 segundo antes de cambiar los atributos
  }

  navigateToRoute() {
    setTimeout(() => {
      this.router.navigate(['/e']);
    }, 3000); // Espera 2 segundos antes de navegar a la ruta '/e'
  }

  resetPage() {
    // Reinicia el estado del componente aquí
  }
}
