import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-opening-block',
  templateUrl: './opening-block.component.html',
  styleUrls: ['./opening-block.component.scss']
})
export class OpeningBlockComponent{

  constructor(private router: Router) {
    this.routerMove = this.routerMove.bind(this); // Enlaza el contexto de `this`
  }

  ngAfterViewInit() {
    // Espera a que el usuario interactúe con la página para reproducir el audio
    document.addEventListener('click', this.routerMove, { once: true });
  }

  routerMove() {
    this.router.navigate(['/b']);
  }
}
