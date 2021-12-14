import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { TitleCasePipe } from '@angular/common';


// import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TimeslotsComponent } from './home/timeslots/timeslots.component';
import { CustomerlistComponent } from './home/customerlist/customerlist.component';
import { Home1Component } from './home1/home1.component';
import { StoresComponent } from './home1/stores/stores.component';
import { OrdersComponent } from './home1/orders/orders.component';
// import { DialogBoxComponent } from './home/timeslots/dialog-box/dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SignupComponent } from './login/signup/signup.component';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {MatIconModule} from '@angular/material/icon';
import { Signup1Component } from './login/signup1/signup1.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { OwnerSignupComponent } from '../app/login/owner-signup/owner-signup.component';
import { DialogTimeBoxComponent } from './login/owner-signup/dialog-time-box/dialog-time-box.component';
import { CustomerSignupComponent } from './login-customer/customer-signup/customer-signup.component';
import {MatDialogModule,MatDialog,MatDialogRef} from '@angular/material/dialog';
import { WriteReviewComponent } from './home1/orders/write-review/write-review.component';
// import { OpenDialogComponent } from './home1/orders/open-dialog/open-dialog.component';
// import {MatButtonModule}from '@angular/material/button',import {MatDialog} from '@angular/material';

// ng add @angular/material






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ReviewsComponent,
    TimeslotsComponent,
    CustomerlistComponent,
    Home1Component,
    StoresComponent,
    OrdersComponent,
    // DialogBoxComponent,
    // SignupComponent,
    Signup1Component,
    LoginCustomerComponent,
    OwnerSignupComponent,
    DialogTimeBoxComponent,
    CustomerSignupComponent,
    WriteReviewComponent,
    // OpenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    // MatDialogRef
    // MatButtonModule
    
  ],
  providers: [TitleCasePipe,MatDialogModule,MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
