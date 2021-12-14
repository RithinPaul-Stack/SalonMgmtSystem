import { ApiService } from '../../api.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTimeBoxComponent } from 'src/app/login/owner-signup/dialog-time-box/dialog-time-box.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  signupForm : any;
  innerWidth: any;
  mediaSub: Subscription = new Subscription;


  constructor( private router: Router,public dialog: MatDialog,private titlecasePipe:TitleCasePipe,private spinner : NgxSpinnerService, private apiService : ApiService, public mediaObserver: MediaObserver) { 
    this.signupForm = new FormGroup({
      role: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      // login : new FormControl(new Date())
    })
   
  }
  save() {

  }
  signup(){
    if(this.signupForm.invalid){
      this.validateAllFormFields(this.signupForm)
    }else{
      this.spinner.show()
      console.log(this.signupForm.value)
      this.apiService.signupcustomer(this.signupForm.value).subscribe((response:any)=>{
        console.log(response)
        if(response.status == "success"){
          sessionStorage.setItem('saloonUserData',JSON.stringify(response.data.newuser))
          // sessionStorage.setItem('saloonUserID',response.data.user._id)
          this.spinner.hide()
          this.router.navigate(['login/customer'])
        }else{
          this.spinner.hide()
          alert(this.titlecasePipe.transform(response.message))
        }
      },(error)=>{
        this.spinner.hide()
        alert("Invalid ID or password")
      })
      
    }
  }
  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }
  
  ngOnInit(): void {
  }
  cancel() {
    this.router.navigate(['login/customer'])
  }

}
