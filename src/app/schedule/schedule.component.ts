import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  currentDate: Date;
  daysInMonth: number[];
  selectedDate: Date;
  disabledDates: Date[];

  monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  constructor() {
    this.currentDate = new Date();
    this.daysInMonth = this.getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear());
    this.selectedDate = null;
    this.disabledDates = [new Date('2023-04-16'), new Date('2023-04-18')]; // Example disabled dates
  
   }

  ngOnInit(): void {
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.daysInMonth = this.getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear());
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.daysInMonth = this.getDaysInMonth(this.currentDate.getMonth(), this.currentDate.getFullYear());
  }

  getDaysInMonth(month: number, year: number): number[] {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  isCurrentDay(day: number): boolean {
    const today = new Date();
    return day === today.getDate() && this.currentDate.getMonth() === today.getMonth() && this.currentDate.getFullYear() === today.getFullYear();
  }

  isSelectedDay(day: number): boolean {
    if (!this.selectedDate) return false;
    return day === this.selectedDate.getDate() && this.currentDate.getMonth() === this.selectedDate.getMonth() && this.currentDate.getFullYear() === this.selectedDate.getFullYear();
  }

  isDisabledDay(day: number): boolean {
    const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    return this.disabledDates.some(disabledDate => this.isSameDate(disabledDate, date));
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }

  selectDate(day: number) {
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
  }
}

