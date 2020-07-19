import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicdetailsComponent } from './basicdetails/basicdetails.component';
import { AddressComponent } from './address/address.component';
import { ListComponent } from './list/list.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [BasicdetailsComponent, AddressComponent, ListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
