import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ResumoOrdensComponent } from './components/resumo-ordens/resumo-ordens.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'home' },
      {
        path: 'home', component: ResumoOrdensComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
