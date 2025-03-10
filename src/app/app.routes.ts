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
    title: ''
  },
  {
    path: 'b',
    component: CurtainBlockComponent,
    title: 'fliz'
  },
  {
    path: 'c',
    component: ScrollBlockComponent,
    title: 'fliz'
  },
  {
    path: 'd',
    component: NumberBlockComponent,
    title: 'fliz'
  },
  {
    path: 'e',
    component: InfoBlockComponent,
    title: 'fliz'
  },
];
