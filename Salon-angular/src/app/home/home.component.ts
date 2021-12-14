import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  selectedButton : any 
  innerWidth: any;
  mediaSub: Subscription = new Subscription;
  showLeftNav: boolean = true
  buttons : Array<any> = []
  userData : any

  constructor(private router: Router,public mediaObserver: MediaObserver) {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.innerWidth = result.mqAlias
      console.log(this.innerWidth)
      if (this.innerWidth == 'xs' || this.innerWidth == 'sm') {
        this.showLeftNav = false;
        ((document.getElementById('leftNav')) as HTMLElement).style.backgroundColor = 'transparent'
      } else {
        this.showLeftNav = true;
        ((document.getElementById('leftNav')) as HTMLElement).style.backgroundColor = '#1f1d2b';
      }
    });
   }

  ngOnInit(): void {
    this.userData = sessionStorage.getItem('SaloonUserData')
    this.userData = JSON.parse(this.userData)
    if (sessionStorage.getItem('buttonName') != null) {
      this.buttons = JSON.parse(""+sessionStorage.getItem('buttonName'))
      this.selectedButton = this.buttons[this.buttons.length-1]
    }else{
      this.buttons.push("dashboard")
      sessionStorage.setItem('buttonName', JSON.stringify(this.buttons))
      this.selectedButton = "dashboard"
    }
    // console.log(this.buttons)
    // console.log(this.selectedButton)
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event : Event) {
    let buttons = JSON.parse(""+sessionStorage.getItem('buttonName'))
    buttons.pop()
    sessionStorage.setItem('buttonName', JSON.stringify(buttons))
    console.log(event)
    this.selectedButton = buttons[buttons.length-1]
  }
  openSideNav() {
    this.showLeftNav = !this.showLeftNav;
    if (this.showLeftNav) {
      ((document.getElementById('leftNav')) as HTMLElement).style.minWidth = '200px';
      ((document.getElementById('leftNav')) as HTMLElement).style.backgroundColor = '#1f1d2b';
    } else {
      ((document.getElementById('leftNav')) as HTMLElement).style.minWidth = '0px';
      ((document.getElementById('leftNav')) as HTMLElement).style.backgroundColor = 'transparent';
    }
  }

  changeButtonFocus(btnName: string) {
    if (this.innerWidth == 'xs' || this.innerWidth == 'sm') {
      this.showLeftNav = !this.showLeftNav;
      if (this.showLeftNav) {
        ((document.getElementById('leftNav')) as HTMLElement).style.backgroundColor = '#1f1d2b';
      } else {
        ((document.getElementById('leftNav')) as HTMLElement).style.backgroundColor = 'transparent';
      }
    }
    ((document.getElementById('leftNav')) as HTMLElement).style.minWidth = '70px';
    this.selectedButton = btnName
    this.buttons.push(btnName)
    sessionStorage.setItem('buttonName', JSON.stringify(this.buttons))
    // console.log(this.buttons)
    switch (btnName) {
      case 'dashboard':
        this.router.navigate(['ownerhome/dashboard'])
        break;
      case 'reviews':
        this.router.navigate(['ownerhome/reviews'])
        break;
      case 'timeslots':
        this.router.navigate(['ownerhome/timeslots'])
        break;
      case 'customerlist':
        this.router.navigate(['ownerhome/customerlist'])
        break;
      
    }
  }
  logout(){
    // sessionStorage.removeItem("saloonUserData")
    sessionStorage.clear()
    // sessionStorage.removeItem("buttonName")
    // sessionStorage.removeItem("saloonUserID")
    // window.location.reload();
    this.router.navigate(['login/owner'])
  }


}
