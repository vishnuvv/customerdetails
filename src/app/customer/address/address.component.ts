import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IAddress } from '../customer.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addresses: IAddress[] = [];
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerService.getAddress(params['id']).subscribe(data => {
        this.addresses = data;
      });
    });
  }

}
