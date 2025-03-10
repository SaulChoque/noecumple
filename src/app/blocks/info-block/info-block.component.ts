import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentTransitionService } from '../../services/CurrentTransition.service';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {

  transitionService = inject(CurrentTransitionService);
  constructor(private appStateService: AppStateService, private router: Router) {}

  ngOnInit() {
    if (this.appStateService.getIsPageReloaded()) {
      this.router.navigate(['']); // Redirige a la ruta raíz
      this.appStateService.resetPageReloadedFlag();
    }
  }

  viewTransitionName() {
    const transition = this.transitionService.currentTransition();
    const isInfoBlock = transition?.to.firstChild?.routeConfig?.path === 'info-block' || transition?.from.firstChild?.routeConfig?.path === 'info-block';
    return isInfoBlock ? 'number-text-transition' : '';
  }

  resetPage() {
    // Reinicia el estado del componente aquí
  }
}
