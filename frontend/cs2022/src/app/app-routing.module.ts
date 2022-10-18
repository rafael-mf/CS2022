import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { HomeComponent } from './pages/container/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: "home",
        component: HomeComponent,
        data: { nome: "Home" }

      },

    ]
  },
  {
    path: "login",
    component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['home']); // or redirect to default route
    }
  }
}
