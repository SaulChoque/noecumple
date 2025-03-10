import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-opening-block',
  templateUrl: './opening-block.component.html',
  styleUrls: ['./opening-block.component.scss']
})
export class OpeningBlockComponent implements OnInit {
  constructor(private router: Router, private appStateService: AppStateService) {}

  ngOnInit() {
    if (this.appStateService.getIsPageReloaded()) {
      this.router.navigate(['']); // Redirige a la ruta raíz
      this.appStateService.resetPageReloadedFlag();
    }
  }

  @HostListener('window:touchstart', ['$event'])
  onWindowTouch(event: TouchEvent) {
    console.log('Pantalla tocada');
    this.router.navigate(['/b']); // Cambia '/b' por la ruta a la que deseas navegar
  }

  resetPage() {
    // Reinicia el estado del componente aquí
  }
}
