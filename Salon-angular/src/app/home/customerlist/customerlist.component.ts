import { Component, OnInit } from '@angular/core';
// import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  sortedCustomer:any;

  constructor() { }

  ngOnInit(): void {
  }

}
