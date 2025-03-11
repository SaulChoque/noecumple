import { Routes } from '@angular/router';
import { OpeningBlockComponent } from './blocks/opening-block/opening-block.component';
import { CurtainBlockComponent } from './blocks/curtain-block/curtain-block.component';
import { ScrollBlockComponent } from './blocks/scroll-block/scroll-block.component';
import { NumberBlockComponent } from './blocks/number-block/number-block.component';
import { InfoBlockComponent } from './blocks/info-block/info-block.component';


export const routes: Routes = [
  {
    path: '',
    component: OpeningBlockComponent,
    title: 'Atencion'
  },
  {
    path: 'b',
    component: CurtainBlockComponent,
    title: 'Habia Una Vez'
  },
  {
    path: 'c',
    component: ScrollBlockComponent,
    title: 'Etapas'
  },
  {
    path: 'd',
    component: NumberBlockComponent,
    title: 'QuinceAños'
  },
  {
    path: 'e',
    component: InfoBlockComponent,
    title: 'Invitacion'
  },
];
