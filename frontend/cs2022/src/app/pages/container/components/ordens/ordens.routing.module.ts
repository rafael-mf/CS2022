import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { OrdensComponent } from './ordens.component';


const routes: Routes = [
  {
    path: '', component: OrdensComponent, children: [
      { path: '', redirectTo: 'ordens' },
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

export class OrdensRoutingModule { }
