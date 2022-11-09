import { Component } from '@angular/core';
import { Person } from './person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personData: Person;
  title = 'Homework';
  constructor() {
    this.personData = {
      name: 'Dennis Schulist',
      isStudent: false,
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: 23505,
      },
    };
  }
  changeStudentStatus() {
    this.personData.isStudent = !this.personData.isStudent;
  }
}
