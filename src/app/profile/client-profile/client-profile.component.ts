import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  isProfCardCollapsed: boolean = true;
  isRevCardCollapsed: boolean = true;
  isFavCardCollapsed: boolean = true;
  isSubCardCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {

    
  }

  toggleProfCard() {
    this.isProfCardCollapsed = !this.isProfCardCollapsed;
  }
  
  toggleRevCard() {
    this.isRevCardCollapsed = !this.isRevCardCollapsed;
  }

  toggleFavCard() {
    this.isFavCardCollapsed = !this.isFavCardCollapsed;
  }
  
  toggleSubCard() {
    this.isSubCardCollapsed = !this.isSubCardCollapsed;
  }
  
}

