import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'home' },
      {
        // path: 'recentes', component: VisualizarSugestoesComponent,
        // canActivate: [AuthGuardService],
        // data: { sistema: 'sug', nivel: NivelAcesso.USUARIO, nome:'Últimas sugestões' }

      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
