import { Routes } from '@angular/router';
import { PokerComponent } from './poker/poker.component';
import { GcfComponent } from './gcf/gcf.component';
import { MemberComponent } from './member/member.component';

export const routes: Routes = [
    {
        path:'',
        component: PokerComponent
    },
    {
        path:'',
        component: GcfComponent,
        outlet: 'gcf',
    },
    {
        path:'',
        component: MemberComponent,
        outlet: 'member',
    }
];
