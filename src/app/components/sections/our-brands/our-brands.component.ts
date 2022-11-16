import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-brands',
  templateUrl: './our-brands.component.html',
  styleUrls: ['./our-brands.component.scss'],
})
export class OurBrandsComponent implements OnInit {
  brandsList: { title: string; color: string; text: string }[] = [
    {
      title: 'Guardians of Lost Worlds (P2E Game)',
      color: '--brand-color-1',
      text: 'Crafty Metaverse will soon launch Guardians of Lost Worlds, the first cross-chain P2E gaming experience. Our game will be available on multiple blockchains and then eventually on our side chain (SANKOFA). This will give users a seamless gameplay experience with little to no gas fees that allow users to focus on the game rather than worrying about losing their returns.',
    },
    {
      title: 'Crafty Metaverse Ecosystem',
      color: '--brand-color-2',
      text: 'Crafty Metaverse presents a Virtual Arts Studio where you can enhance your creativity by creating digital arts inspired by your game. A virtual marketplace to allow the users to trade and stake our $CMETA token and their NFTs. Negotiate with the digital avatars of other users to sell your NFTs at the best prices and generate passive income while playing',
    },
    {
      title: 'SANKOFA',
      color: '--brand-color-3',
      text: 'SANKOFA($KOFA) is an Ethereum sidechain that will be created with Guardians of Lost Worlds community in mind. LYQUID, the team behind Guardians of Lost Worlds, will build a reliable, fast and cheap network that could cater to the demands of the game.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
