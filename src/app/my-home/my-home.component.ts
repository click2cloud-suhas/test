// my-home.component.ts

import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  selectedClass: string = '';
  selectedSection: string = '';
  studentData: any[] = [];
  filteredData: any[] = [];

  @ViewChild('sidenav') sidenav!: MatSidenav;

  isSidenavOpened = true;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchStudentData();
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  fetchStudentData() {
    // Simulate fetching data from an API
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.studentData = data.map(user => ({
        name: user.name,
        age: Math.floor(Math.random() * 10) + 18, // Random age for illustration
        address: user.address.street + ', ' + user.address.city,
        image: 'https://media.licdn.com/dms/image/C4E03AQGzXntgVTYg1Q/profile-displayphoto-shrink_800_800/0/1658036377296?e=2147483647&v=beta&t=I-X3cj72ru4qYvBuT_AM_wt17gO-AoRpjDNESZ-vJvI', // Placeholder image URL
        class: this.getRandomClass(),
        section: this.getRandomSection()
      }));
      this.filteredData = this.studentData; // Initially show all data
    });
  }

  filterData() {
    this.filteredData = this.studentData.filter(student => {
      return (
        (this.selectedClass === '' || student.class === this.selectedClass) &&
        (this.selectedSection === '' || student.section === this.selectedSection)
      );
    });
  }

  private getRandomClass(): string {
    const classes = ['classA', 'classB', 'classC'];
    return classes[Math.floor(Math.random() * classes.length)];
  }

  private getRandomSection(): string {
    const sections = ['A', 'B', 'C'];
    return sections[Math.floor(Math.random() * sections.length)];
  }
}
