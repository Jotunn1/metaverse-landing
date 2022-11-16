import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-title-w-list',
  templateUrl: './pr-title-w-list.component.html',
  styleUrls: ['./pr-title-w-list.component.scss']
})
export class PrTitleWListComponent implements OnInit {
  @Input() content: { count: string; title: string; listItems: any[] } = { count: '', title: '', listItems: [] };
  constructor() { }

  ngOnInit(): void {
  }

}
