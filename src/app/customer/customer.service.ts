import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer, IAddress } from './customer.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {

  }
  getCustomerList(): Observable<ICustomer[]> {
    const customers: ICustomer[] = [{
      name: 'customer1',
      age: 10,
      id: 100,
    }, {
      name: 'customer2',
      age: 10,
      id: 101
    }, {
      name: 'customer3',
      age: 10,
      id: 102
    }];
    return of(customers);
  }

  getAddress(customerId: number): Observable<IAddress[]> {
    return of([{
        customerId: customerId,
        address: 'Address 1',
        city: 'City 1',
        pincode: '11111',
        country: 'India'
      }, {
        customerId: customerId,
        address: 'Address 1',
        city: 'City 1',
        pincode: '11111',
        country: 'India'
      }
    ]);
  }
}
