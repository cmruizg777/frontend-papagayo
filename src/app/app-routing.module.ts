import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guard/user.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'', component: HomeComponent, canActivate: [UserGuard]},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'cliente', canActivate: [UserGuard],
  loadChildren: () => import('./cliente/cliente.module').then( m => m.ClienteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
