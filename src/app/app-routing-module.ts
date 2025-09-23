import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './components/login.component/login.component';
import { mainComponent } from './components/main.component/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: loginComponent },
  { path: 'main', component: mainComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
