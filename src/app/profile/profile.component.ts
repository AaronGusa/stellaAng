import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedTab: number = 1;

  constructor(private router: Router) { }

  navigateToProfile(accountType: string) {
    if (accountType === 'client') {
      this.router.navigate(['/client']);
    } else if (accountType === 'business') {
      this.router.navigate(['/business']);
    } else if (accountType === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/error'])
    }
  }



  ngOnInit(): void {

  }

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

}
