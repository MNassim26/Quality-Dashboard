import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstructionsComponent } from './layout/instructions/instructions.component';
import { AvantProposComponent } from './layout/avant-propos/avant-propos.component';
import { ProcessusComponent } from './layout/processus/processus.component';
import { SaisieDonneesComponent } from './layout/saisie-donnees/saisie-donnees.component';
import { ModifierCompteComponent } from './layout/modifier-compte/modifier-compte.component';
import { ConsulterDonneesComponent } from './layout/consulter-donnees/consulter-donnees.component';
import { ResponsablesComponent } from './layout/responsables/responsables.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LayoutComponent,
    InstructionsComponent,
    AvantProposComponent,
    ProcessusComponent,
    SaisieDonneesComponent,
    ModifierCompteComponent,
    ConsulterDonneesComponent,
    ResponsablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
