import { Person } from '../person.interface';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() studentStatus: Person = {
    name: '',
    isStudent: false,
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: 0,
    },
  };
  constructor() {}

  ngOnInit(): void {
    console.log(this.studentStatus);
  }
}
