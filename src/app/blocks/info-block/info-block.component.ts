import { Component, inject } from '@angular/core';
import { CurrentTransitionService } from '../../services/CurrentTransition.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent {

  transitionService = inject(CurrentTransitionService);

  viewTransitionName() {
    const transition = this.transitionService.currentTransition();
    const isInfoBlock = transition?.to.firstChild?.routeConfig?.path === 'info-block' || transition?.from.firstChild?.routeConfig?.path === 'info-block';
    return isInfoBlock ? 'number-text-transition' : '';
  }
  
}
