import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer-list/customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    pathMatch: 'full',
  },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:customer-id', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
