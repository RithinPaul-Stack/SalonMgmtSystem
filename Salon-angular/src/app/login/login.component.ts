import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router';
import { ApiService } from '../api.service'
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : any;
  innerWidth: any;
  mediaSub: Subscription = new Subscription;


  constructor(private titlecasePipe:TitleCasePipe,private spinner : NgxSpinnerService, private router: Router, private apiService : ApiService) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      login : new FormControl(new Date())
    })
  }

  ngOnInit(): void {
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
  signup(title : any, employeeDetails? : any){
    this.router.navigateByUrl('login/ownersignup', { state: { data : employeeDetails , action:title } });
  }
  login(){
    if(this.loginForm.invalid){
      this.validateAllFormFields(this.loginForm)
    }else{
      this.spinner.show()
      console.log(this.loginForm.value)
      this.apiService.loginowner(this.loginForm.value).subscribe((response:any)=>{
        console.log(response)
        if(response.status == "success"){
          this.router.navigate(['ownerhome/dashboard'])
          sessionStorage.setItem('saloonstoreID',JSON.stringify(response.data.user._id))
          // sessionStorage.setItem('saloonUserData',JSON.stringify(response.data.user))
          // sessionStorage.setItem('saloonUserID',response.data.user._id)
          console.log(response.data.user._id)
          // console.log(saloonUserID)
          this.spinner.hide()
          this.router.navigate(['ownerhome/dashboard'])
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
  
}
