import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    var calendarBody = document.getElementById('calendar-body');

    // Get current date
    var currentDate = new Date();

    // Get number of days in current month
    var daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Generate calendar cells for each day of the month
    for (var i = 1; i <= daysInMonth; i++) {
      var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      var cell = document.createElement('td');
      cell.innerText = i.toString();
      cell.addEventListener('click', (event) => {
        // Handle date selection
        var selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt((<HTMLElement>event.target).innerText)); // Cast event.target to HTMLElement and access innerText property
        alert('Selected date: ' + selectedDate.toDateString());
      });
      calendarBody.appendChild(cell);
    }
  }

}
