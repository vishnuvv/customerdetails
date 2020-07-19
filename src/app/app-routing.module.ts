import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'customer-list',
  pathMatch: 'full'
}, {
  path: 'customer-list',
  loadChildren: './customer/customer.module#CustomerModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
