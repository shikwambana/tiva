import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TivaComponent } from './tiva/tiva.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ndzhaku', component: AdminComponent},
  {path: 'tiva', component: TivaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
