import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentTransitionService } from '../../services/CurrentTransition.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent{

  transitionService = inject(CurrentTransitionService);
  constructor(private router: Router) {}



  viewTransitionName() {
    const transition = this.transitionService.currentTransition();
    const isInfoBlock = transition?.to.firstChild?.routeConfig?.path === 'info-block' || transition?.from.firstChild?.routeConfig?.path === 'info-block';
    return isInfoBlock ? 'number-text-transition' : '';
  }

}
