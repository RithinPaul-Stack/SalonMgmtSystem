import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service'
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {
  action:any;
  reviewForm : any;
  innerWidth: any;
  mediaSub: Subscription = new Subscription;


  constructor(private titlecasePipe:TitleCasePipe,private spinner : NgxSpinnerService, private router: Router, private apiService : ApiService) {
    this.reviewForm = new FormGroup({
      saloonname: new FormControl(null, [Validators.required]),
      review: new FormControl(null, [Validators.required]),

      // login : new FormControl(new Date())
    })
   }

  ngOnInit(): void {
  }
  cancel() {
    this.router.navigate(['customerhome/orders'])
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
  review(){
    if(this.reviewForm.invalid){
      this.validateAllFormFields(this.reviewForm)
    }else{
      this.spinner.show()
      console.log(this.reviewForm.value)
      this.apiService.writereview(this.reviewForm.value).subscribe((response:any)=>{
        console.log(response)
        if (response.status === "success") {
          this.cancel()
          console.log('yes')
          this.spinner.hide()
        } else {
          alert("something went wrong. please retry")
          this.spinner.hide()
        }
        // if(response.status == "success"){
        //   sessionStorage.setItem('saloonUserData',JSON.stringify(response.data.user))
        //   // sessionStorage.setItem('saloonUserID',response.data.user._id)
        //   this.spinner.hide()
        //   this.router.navigate(['ownerhome/dashboard'])
        // }else{
        //   this.spinner.hide()
        //   alert(this.titlecasePipe.transform(response.message))
        // }
      },(error)=>{
        this.spinner.hide()
        alert("oops!somethhing went wrong...")
      })
      
    }
  }

}
