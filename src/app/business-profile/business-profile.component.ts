import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit {

  public id = {
    businessName: "Test Business",
    ownerName: 'John Doe',
    preferredListName: 'My Preferred List',
    address: '1234 Main St, Springfield, IL 62704',
    phone: '(123) 456-7890',
    email: 'info@mybusiness.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

 

}
