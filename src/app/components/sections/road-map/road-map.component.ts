import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss'],
})
export class RoadMapComponent implements OnInit {
  roadMapContent: { count: string; title: string; listItems: any[] }[] = [
    {
      count: 'Q1',
      title: 'Governance Token Launch on BSC ($CMETA)',
      listItems: [
        'Launch Date: Jan 8th, 2022 Contract Audit',
        'TechAudit Completed on Jan 21st, 2022',
        '32k Telegram Members.  CG and CMC listings',
        'Application Sent CEX Listings',
        'CoinsBit Listing – Feb 8th . Website Revamp',
        'Contracted UI/UX Developers',
      ],
    },
    {
      count: 'Q2',
      title: 'CMETA Ecosystem Begins',
      listItems: [
        'CMETA Staking Release',
        'SANKOFA Sidechain DEV Starts ($KOFA)',
        'CEX Listings and Marketing',
        'Governance Token Launch on SOL ($CMETA)',
        'Bridge BSC, ETH Smart Contracts to Solana Contract',
        '10K Telegram Members',
        '10K Twitter Followers'
      ],
    },
    {
      count: 'Q3',
      title: 'Guardians of Lost Worlds Released to Public (PC)',
      listItems: [
        'Implement In-Game Staking ($KOFA Rewards)',
        'In-Game NFT Released',
        'SANKOFA Sidechain on Test Net',
        'Fiat On-Ramp Added',
        'Gameplay Battle Mode Introduced',
        'Marketplace Introduced',
        'CEX Listings and Marketing'
      ],
    },
    {
      count: 'Q4',
      title: 'Governance Token Launch on BSC ($CMETA)',
      listItems: [
        ' Migrate Guardians of Lost Worlds to SANKOFA Sidechain',
        ' CEX Listings & Marketing',
        'Virtual Arts Studio Introduced',
        'Mobile Beta Gameplay Revealed',
        'CMETA DEX Introduced: FORGE',
        'Multi-Network Implementation',
        'VR Game Dev Begins'
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
