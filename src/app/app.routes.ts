import { Routes } from '@angular/router';
import { PokerComponent } from './poker/poker.component';
import { GcfComponent } from './gcf/gcf.component';
import { MemberComponent } from './member/member.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: PokerComponent },
            { path: '', component: HeaderComponent, outlet: 'header' },
            { path: '', component: GcfComponent, outlet: 'gcf' },
            { path: '', component: MemberComponent, outlet: 'member' }
        ]
    }
  //以下的方式(把主要路由組件放最下面)也可以但是更推薦用 children
  // {
  //     path:'',
  //     component: HeaderComponent,
  //     outlet: 'header'
  // }
  // ,
  // {
  //     path:'',
  //     component: GcfComponent,
  //     outlet: 'gcf',
  // }
  // ,
  // {
  //     path:'',
  //     component: MemberComponent,
  //     outlet: 'member',
  // },
  // {
  //     path:'',
  //     component: PokerComponent
  // }
];
