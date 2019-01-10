import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  private title: string;

  constructor() { this.title = 'Catalago de aplicações'; }

  ngOnInit() {
  }

}
