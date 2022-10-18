import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';


const routes: Routes = [
  {
    path: '', component: UsuariosComponent, children: [
      { path: '', redirectTo: 'usuarios' },
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
