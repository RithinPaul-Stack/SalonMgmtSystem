import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service'
import { Sort } from '@angular/material/sort';
import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface UsersData {
  name: string;
  id: number;
}
//  private router: Router,public dialog: MatDialog,private titlecasePipe:TitleCasePipe,private spinner : NgxSpinnerService, private apiService : ApiService, public mediaObserver: MediaObserver
@Component({
  selector: 'app-dialog-time-box',
  templateUrl: './dialog-time-box.component.html',
  styleUrls: ['./dialog-time-box.component.css']
})
export class DialogTimeBoxComponent implements OnInit {

  // constructor(public dialogRef: MatDialogRef<DialogTimeBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private spinner : NgxSpinnerService, private router: Router, private apiService : ApiService) { }

  // ngOnInit(): void {
  //   console.log(this.data)
  // }
  onNoClick(): void {
    this.dialogRef.close();
  }
  action: string='';
  dayitems: any = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  local_data: any;
  dialogForm:any;
  constructor(
    public dialogRef: MatDialogRef<DialogTimeBoxComponent>,private router: Router,private spinner: NgxSpinnerService, private apiService : ApiService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    this.local_data = data;
    this.dialogForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      login : new FormControl(new Date()),
      // local_data:new FormControl(''),
      // opening_time_morning:new FormControl(''),
      // closing_time_morning:new FormControl(''),
      // opening_time_evening:new FormControl(''),
      // closing_time_evening:new FormControl(''),
    })
  }
  getclass(x:any) {
    if (x == this.local_data.day) {
      // return 'days';
    }
    return 'days';
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
    console.log(this.local_data)
    console.log(this.action)
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('900px');
    console.log(this.data)
  }
  
}
