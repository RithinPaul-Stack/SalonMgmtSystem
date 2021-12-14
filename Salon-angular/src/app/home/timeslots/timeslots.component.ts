import { Component, OnInit } from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
// import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent implements OnInit {
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    this.submitted = true;
  }

  onReset() {
    this.submitted = false;
    // this.countryStateForm.reset();
    // this.array = [];
    // this.dataSource = new MatTableDataSource<UsersData>(this.array);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // this.totalSize = this.array.length;
  }
  days :any= [
    { "day": "sunday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "monday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "tuesday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "wednesday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "thursday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "friday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null },
    { "day": "saturday", "isopen": false, "opening_time_morning": null, "closing_time_morning": null, "opening_time_evening": null, "closing_time_evening": null }
  ];

}
