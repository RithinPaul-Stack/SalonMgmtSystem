import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service'
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  sortedReviews:any;
  review:any;

  constructor(private router: Router,public location: Location, private spinner: NgxSpinnerService,private apiService: ApiService) { }

  ngOnInit(): void {
    this.reviewlist();
  }
  reviewlist(){
    this.spinner.show()
    this.apiService.getreviews().subscribe((response : any)=>{
      console.log(response)
      if(response.status === 'success'){
        this.spinner.hide()
        this.review = response.data.doc
        }else{
        this.spinner.hide()
        alert("something went wrong!")
      }
    },(error)=>{
      alert("Oops!, something went wrong")
      this.spinner.hide()
    })
  }

}
