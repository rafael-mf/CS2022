import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProdutosComponent } from './produtos.component';


const routes: Routes = [
  {
    path: '', component: ProdutosComponent, children: [
      { path: '', redirectTo: 'produtos' },
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
