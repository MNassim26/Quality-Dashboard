import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InstructionsComponent } from './layout/instructions/instructions.component';
import { AvantProposComponent } from './layout/avant-propos/avant-propos.component';
import { ProcessusComponent } from './layout/processus/processus.component';
import { SaisieDonneesComponent } from './layout/saisie-donnees/saisie-donnees.component';
import { ModifierCompteComponent } from './layout/modifier-compte/modifier-compte.component';

const routes: Routes = [
  {
    path: '',
      component: LoginComponent
  },

  {
    path: 'login',
      component: LoginComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
    },
    {
      path: '',
      component: InstructionsComponent
    },
    {
      path: 'avant-propos',
      component: AvantProposComponent
    },
    {
      path: 'processus',
      component: ProcessusComponent
    },
    {
      path: 'saisie-données',
      component: SaisieDonneesComponent
    },
    {
      path: 'compte',
      component: ModifierCompteComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
