// import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
// import { DialogBoxComponent } from 'src/app/home/timeslots/dialog-box/dialog-box.component';
import { formatDate } from '@angular/common';
import "@angular/compiler";
/// <reference types="@types/googlemaps" />
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
  selectedday: any;
  days:any;

  constructor( public dialog: MatDialog, private formBuilder: FormBuilder,public location: Location, private router: Router, private spinner: NgxSpinnerService, private apiService: ApiService) { }

  ngOnInit(): void {
  }
  cancel() {
    this.router.navigate(['login'])
  }
  // openDialog(action:any, obj:any) {
  //   this.selectedday = obj.Day;
  //   // const dialogRef = this.dialog.open(DialogBoxComponent, {
  //   //   width: '976px',
  //   //   height: '635px',
  //   //   data: obj
  //   // });
  //   this.days= [
  //     { "day": "sunday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
  //     { "day": "monday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
  //     { "day": "tuesday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
  //     { "day": "wednesday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
  //     { "day": "thursday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
  //     { "day": "friday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
  //     { "day": "saturday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null }
  //   ];
  
  

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result.event === 'Update') {
  //       // this.updateRowData(result.data);

  //     }
  //   });


  // }


}
