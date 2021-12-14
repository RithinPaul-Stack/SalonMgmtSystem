// import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormBuilder, AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores:any;
  storesForm : any;
  // selectedItems:string[];
  saloonUserID = sessionStorage.getItem('saloonUserID');
 storeId :any;
  action="add";
  timeForm !:FormGroup;
  timeDetails:any;
  time:any;
  sortedTime:any;
  sortedStores:any;
  local_data: any;
  days :any= [
    { "day": "sunday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "monday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "tuesday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "wednesday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "thursday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "friday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "saturday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null }
  ];

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private router: Router,private apiService : ApiService,) {
    // console.log(this.timeDetails)
    this.timeForm = new FormGroup({
      time: new FormControl((this.timeDetails?.time == null || undefined) ? "" : this.timeDetails.time),
      date: new FormControl((this.timeDetails?.date == null || undefined) ? "" : this.timeDetails.date),
      customer: new FormControl(this.saloonUserID),
      salesowner: new FormControl(this.storeId),
      })
  }
  selectedItems:any;
 ngOnInit(): void {
    this.apiService.storetimings().subscribe((response:any)=>{
        this.storeId =response;
      })
     this.selectedItems =new Array<string>();
    this.getStoreTimes()
    var saloonUserID = sessionStorage.getItem('saloonUserID');
  }
  
  saveStoreID(storeID : string){
     this.storeId = storeID
     console.log("saveStoreId called",this.storeId)
     }
  
  onReset() {
    this.router.navigate(['customerhome/stores']);
    window.location.reload();
  }
  getStoreTimes(){
    this.spinner.show()
    this.apiService.storetimings().subscribe((response:any)=>{
      console.log(response.data.stores)
      sessionStorage.setItem('storeDetails',JSON.stringify(response.data.stores))
      if(response.status == "sucess"){
        this.stores=response.data.stores
        console.log(this.stores)
        this.spinner.hide()
      }else{
        this.spinner.hide()
        alert("oops!, something went wrong")
      }
    },(error)=>{
      alert("Unknown Error")
      this.spinner.hide()
    })
  }
  
  //=============================================================================
  addTimeForm() {
    if (this.timeForm.invalid) {
      this.validateAllFormFields(this.timeForm); //{7}
    } else if (this.timeForm.valid) {
      console.log(this.timeForm.value)

      const formData = new FormData();
      formData.append('time', this.timeForm.get('time')?.value);
      formData.append('name', this.timeForm.get('name')?.value);
      formData.append('salesowner', this.storeId);
      this.spinner.show()
      console.log(formData)
       var saloonUserID = sessionStorage.getItem('saloonUserID')
     console.log(saloonUserID)
       this.timeForm.patchValue({
        salesowner:this.storeId
      })
       console.log(this.timeForm.value)
       formData.forEach((value, key) => {
      console.log(key + " " + value)
    });
      if(this.action == "add"){
        this.apiService.chooseappointment(this.timeForm.value).subscribe((response: any) => {
          console.log(response)
          if (response.status === "success") {
            this.spinner.hide()
            console.log("Choose appointments is working")
          } else {
            alert("something went wrong. please retry")
            this.spinner.hide()
          }
        }, (error) => {
          alert("Oops!, something went wrong")
          this.spinner.hide()
        })
      }
    }
  }
  //=========================================================================================
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
  

  

}
