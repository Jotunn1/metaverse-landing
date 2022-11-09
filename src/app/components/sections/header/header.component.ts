import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks:string[] = ['Home', 'About Us','White paper','Tokenomics','Road Map','How to buy','Buy']
  constructor() { }

  ngOnInit(): void {
  }

}
