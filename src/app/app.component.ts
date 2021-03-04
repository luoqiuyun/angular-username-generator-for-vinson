import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'username-generator';
  fname = 'Coder';
  lname = 'Byte';
  username = '';

  ngOnInit() {
    this.usernameGenerator();
  }

  onFirstnameChange(e: Event): void {
    this.fname = (e.target as HTMLInputElement).value.toLowerCase();
    this.usernameGenerator();
  }

  onLastnameChange(e: Event): void {
    this.lname = (e.target as HTMLInputElement).value.toLowerCase();
    this.usernameGenerator();
  }

  usernameGenerator(): void {
    if (!this.fname || !this.lname) {
      this.username = '';
      return;
    }
    this.username = this.fname;
    this.username += '_';
    this.username += this.lname;
    this.username += '_';
    this.username += Math.floor(Math.random() * 9) + 1;
    this.username = this.username.toLowerCase();
  }
}
