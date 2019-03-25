import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InstructionsComponent } from './layout/instructions/instructions.component';
import { AvantProposComponent } from './layout/avant-propos/avant-propos.component';

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
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
