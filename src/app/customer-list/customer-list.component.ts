import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {

  get users() {
    return this.userService.customersList;
  }
  constructor(private userService : UsersService) {}

  ngOnInit(): void {}
}
