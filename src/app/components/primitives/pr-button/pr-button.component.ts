import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pr-button',
  templateUrl: './pr-button.component.html',
  styleUrls: ['./pr-button.component.scss']
})
export class PrButtonComponent implements OnInit {
  @Input('btnText') btnText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
