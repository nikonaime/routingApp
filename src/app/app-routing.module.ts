import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer-list/customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    pathMatch: 'full',
  },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:customer-id', component: CustomerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
