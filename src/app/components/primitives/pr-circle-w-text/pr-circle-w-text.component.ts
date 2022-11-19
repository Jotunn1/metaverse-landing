import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pr-circle-w-text',
  templateUrl: './pr-circle-w-text.component.html',
  styleUrls: ['./pr-circle-w-text.component.scss'],
})
export class PrCircleWTextComponent implements OnInit {
  @Input() inputData: { text: string; circleColor: string } = {
    text: '',
    circleColor: '',
  };

  constructor() {
    console.log(this.inputData,'inside constructor');
  }

  ngOnInit(): void {
    console.log(this.inputData,'inside ngOnInit');
    this.inputData.text = this.splitTextWithPercent(this.inputData.text)
    console.log(this.inputData,'after');
    // console.log(
    //   this.splitTextWithPercent('Tax: 10% Marketing : 5% Development : 5%')
    // );
  }

  splitTextWithPercent(text: string):string {
    return text.split('%').join('% </br>');
  }
}
