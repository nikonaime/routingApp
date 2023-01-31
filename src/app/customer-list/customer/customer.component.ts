import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  selectedUser: Customer | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['customer-id'];
    if (userId) {
      this.selectedUser = this.userService.customerDetails.find(
        (a: any) => a.id === userId
      );
    }
  }
}
