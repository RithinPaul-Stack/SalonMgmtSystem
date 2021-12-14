import { FormGroup } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { OpenDialogComponent } from 'src/app/home1/orders/open-dialog/open-dialog.component';
import { Sort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router';
import { ApiService } from '../../api.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  sortedAppointments:any;
  appointments:any;
  action:any;
  appointmentForm!:FormGroup
  appointmentDetails:any;
  saloonUserId= sessionStorage.getItem('saloonUserId')

  constructor(public dialog: MatDialog, private spinner : NgxSpinnerService, private router: Router, private apiService : ApiService) { 
    // appointmentForm
    this.appointmentForm = new FormGroup({
      // time: new FormControl((this.appointmentDetails?.time == null || undefined) ? "" : this.appointmentDetails.time),
      // date: new FormControl((this.appointmentDetails?.date == null || undefined) ? "" : this.appointmentDetails.date),
      // customer: new FormControl(this.saloonUserID),
      // salesowner: new FormControl(this.saloonUserId),
      })
  }

  ngOnInit(): void {
    this.getAppointmnetsList()
    var saloonUserID = sessionStorage.getItem('saloonUserID');
    // this.apiService.appointments(this.saloonUserId).subscribe((response:any)=>{
      console.log(saloonUserID)
      // console.log(response)
      
    // })
  }
  getAppointmnetsList() {
    this.spinner.show()
    var saloonUserID = sessionStorage.getItem('saloonUserID');
    this.apiService.appointments(saloonUserID).subscribe((response: any) => {
      console.log(response)
      if (response.status === 'success') {
        this.spinner.hide()
        console.log(response)
        this.appointments = response.data.orders
        this.sortedAppointments = response.data.doc
      } else {
        this.spinner.hide()
        alert("something went wrong!")
      }
    }, (error) => {
      alert("Oops!, something went wrong")
      this.spinner.hide()
    })
  }
  ViewDialogBox(title : string, employeeDetails? : any){
    // this.router.navigateByUrl('customerhome/orders/dialog', { state: { data : employeeDetails , action:title } });
    this.router.navigate(['customerhome/orders/dialog', { state: { data : employeeDetails , action:title } }])
  }
  addSpecialization(title: string, itemDetails?: any) {
    this.router.navigateByUrl('customerhome/orders/writereview', { state: { data : itemDetails , action:title } });
  }

}
