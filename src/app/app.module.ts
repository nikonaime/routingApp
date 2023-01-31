import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer-list/customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UsersService } from './customer-list/users.service';

@NgModule({
  declarations: [AppComponent, CustomerComponent, CustomerListComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
