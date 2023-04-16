import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  contact = {
    name: "Buddy Boy Admin You!"
  }

  isSiteCardCollapsed: boolean = true;

  isTagCardCollapsed: boolean = true;
  isRevCardCollapsed: boolean = true;
  isPerfCardCollapsed: boolean = true;
  isUsersCardCollapsed: boolean = true;
  isBusVerCardCollapsed: boolean = true;
  isAdRevCardCollapsed: boolean = true;
  


  constructor() { }

  ngOnInit(): void {
  }

  toggleSiteCard() {
    this.isSiteCardCollapsed = !this.isSiteCardCollapsed;
  }

  toggleTagCard() {
    this.isTagCardCollapsed = !this.isTagCardCollapsed;
  }
  
  toggleRevCard() {
    this.isRevCardCollapsed = !this.isRevCardCollapsed;
  }

  togglePerfCard() {
    this.isPerfCardCollapsed = !this.isPerfCardCollapsed;
  }
  
  toggleUsersCard() {
    this.isUsersCardCollapsed = !this.isUsersCardCollapsed;
  }

  
  toggleBusVerCard() {
    this.isBusVerCardCollapsed = !this.isBusVerCardCollapsed;
  }
  
  toggleAdRevCard() {
    this.isAdRevCardCollapsed = !this.isAdRevCardCollapsed;
  }

}
