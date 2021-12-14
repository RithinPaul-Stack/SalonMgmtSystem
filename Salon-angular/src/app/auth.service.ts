import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any
  userRole = ''


  constructor() { }
  getRole(): string {
    this.userData = sessionStorage.getItem('SaloonUserData')
    if (this.userData != null) {
      this.userData = JSON.parse(this.userData)
      this.userRole = this.userData.user_role
    }
    return this.userRole
  }

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('SaloonUserData') != null) {
      this.userData = sessionStorage.getItem('SaloonUserData')
      this.userData = JSON.parse(this.userData)
      if (this.userData != null) {
        return true
        // if (this.userData.token != null) {
        //   if (this.tokenExpired(this.userData.token)) {  // token expired
        //     alert("Session Expired")
        //     return false
        //   } else {
        //     return true
        //   }
        // } else {
        //   return false
        // }
      }
      else {
        return false
      }
    } else {
      return false
    }
  }
  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
