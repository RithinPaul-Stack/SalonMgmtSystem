import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { TimeslotsComponent } from './home/timeslots/timeslots.component';
import { CustomerlistComponent } from './home/customerlist/customerlist.component';
import { Home1Component } from './home1/home1.component';
import { StoresComponent } from './home1/stores/stores.component';
import { OrdersComponent } from './home1/orders/orders.component';
import { Signup1Component } from './login/signup1/signup1.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { OwnerSignupComponent } from '../app/login/owner-signup/owner-signup.component';
import { DialogTimeBoxComponent } from './login/owner-signup/dialog-time-box/dialog-time-box.component';
import { CustomerSignupComponent } from './login-customer/customer-signup/customer-signup.component';
import { WriteReviewComponent } from './home1/orders/write-review/write-review.component';
import {AuthorizationGuard } from './authorization.guard'







const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'login/ownersignup/dialogbox', component: DialogTimeBoxComponent },
  { path: 'login/customersignup', component: CustomerSignupComponent },
  { path: 'login/customer', component: LoginCustomerComponent },
  { path: 'login/owner', component: LoginComponent },
  { path: 'login/signup1', component: Signup1Component },
  { path: 'login/ownersignup', component: OwnerSignupComponent },
  { path: 'ownerhome', component: HomeComponent,
  children: [   
  { path: '', component: DashboardComponent },  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'timeslots', component: TimeslotsComponent },
  { path: 'customerlist', component: CustomerlistComponent },
  ]},
  { path: 'customerhome', component: Home1Component,
  children:[
    { path: '', component: StoresComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'orders/writereview', component: WriteReviewComponent },
    // { path: 'orders/dialog', component: OpenDialogComponent },
  ]}

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
