import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MonitorService} from "../monitor.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  farms: any[] = [];

  constructor(private http: HttpClient, private apiService: MonitorService) { }

  ngOnInit() {
    // this.apiService.fetchFarmData(1).subscribe((response: any) => {
    //   this.farms = response.details;
    // });
  }


  ViewData() {
    // this.apiService.fetchFarmData(1).subscribe((response: any) => {
    //   this.farms = response.details;
    // }
    // );
  }

}
