import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BetBearFormComponent } from './components/bet-bear-form/bet-bear-form.component';

const routes: Routes = [
  {path: 'bet-bear-form',component: BetBearFormComponent},
  {
    path: '',
    redirectTo: '/bet-bear-form',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}