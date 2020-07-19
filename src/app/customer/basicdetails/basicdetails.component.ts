import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../customer.model';

@Component({
  selector: 'app-basicdetails',
  templateUrl: './basicdetails.component.html',
  styleUrls: ['./basicdetails.component.scss']
})
export class BasicdetailsComponent implements OnInit {

  @Input() customer: ICustomer ;
  constructor() { }

  ngOnInit() {
  }

}
