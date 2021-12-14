import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "http://localhost:9990/"
  // private http: HttpClient
  constructor(private http: HttpClient) {}
    signupowner(signupData:any){
      let endPoint = "api/v1/salon"
      return this.http.post(this.baseURL+endPoint,signupData)
    }
    loginowner(loginData:any){
      let endPoint = "api/v1/salon/login"
      return this.http.post(this.baseURL+endPoint,loginData)
    }
    signupcustomer(signupData:any){
      let endPoint = "api/v1/customer/signup"
      return this.http.post(this.baseURL+endPoint,signupData)
    }
    logincustomer(loginData:any){
      let endPoint = "api/v1/customer/login"
      return this.http.post(this.baseURL+endPoint,loginData)
    }
    storetimings(){
      let endPoint = "api/v1/salon"
      return this.http.get(this.baseURL+endPoint)
    
    }
    // ================
    appointments(id:any){
      let endPoint = "api/v1/order/customer/"+ id
      return this.http.get(this.baseURL+endPoint)
    
    }
    // ================
    writereview(reviewData:any){
      let endPoint = "api/v1/review"
      return this.http.post(this.baseURL+endPoint,reviewData)
    }
    getreviews( ){
      let endPoint = "api/v1/review/salon/id"
      return this.http.get(this.baseURL+endPoint)
    
    }
    chooseappointment(appointmentData:any){
      let endPoint = "api/v1/order"
      return this.http.post(this.baseURL+endPoint,appointmentData)
    }
    
    //=========================================================
    // createSpecialization(loginData:any){
    //   let endPoint = "api/v1/salon/login"
    //   return this.http.post(this.baseURL+endPoint,loginData)
    // }
    //=========================================================
   
}
