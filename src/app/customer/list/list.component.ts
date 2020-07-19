import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../customer.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  customerList: ICustomer[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private cusomterService: CustomerService) { }

  ngOnInit() {
    this.cusomterService.getCustomerList().subscribe(data => {
      this.customerList = data;
    });
  }
  getAddress(customerId) {
    console.log(customerId);
    this.router.navigate(['customer', customerId, 'address'], {relativeTo: this.route});
  }

}
