import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [{
  path: '',
  component: ListComponent,
  children: [{
      path: 'customer/:id/address',
      component: AddressComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
