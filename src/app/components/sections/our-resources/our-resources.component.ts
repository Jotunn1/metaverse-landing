import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-resources',
  templateUrl: './our-resources.component.html',
  styleUrls: ['./our-resources.component.scss'],
})
export class OurResourcesComponent implements OnInit {
  resourcesList: { text: string; circleColor: string }[] = [
    {
      text: 'Circulating Supply: 1,000,000,000',
      circleColor: '#9D71FF',
    },
    {
      text: 'Maximum supply: 1,000,000,000',
      circleColor: '#FF4DE3',
    },
    {
      text: 'Tax: 10% Marketing : 5% Development : 5%',
      circleColor: '#FF388C',
    },
    {
      text: 'Token symbol: $CMETA',
      circleColor: '#56FFEB',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
