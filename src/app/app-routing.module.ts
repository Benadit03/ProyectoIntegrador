import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { Pagina404Component } from './component/pagina404/pagina404.component';
import { PortafolioComponent } from './component/portafolio/portafolio.component';

const routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
