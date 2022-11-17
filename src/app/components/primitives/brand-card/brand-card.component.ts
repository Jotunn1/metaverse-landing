import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss'],
})
export class BrandCardComponent implements OnInit {
  svgPath:string = 'assets/svg-map.svg#';
  @Input() brandCardInfo: {type:string, title: string; color: string; text: string } = {
    type: '',
    title: '',
    color: '',
    text: '',
  };
  @HostBinding('attr.style')
  public get styles(): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(
      `--card-color: var(${this.brandCardInfo.color});`
    );
  }

  @HostBinding('class') cardClass: string = '';

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    console.log(this.brandCardInfo);
    this.cardClass = this.setBrandCardClass(this.brandCardInfo.title);
    console.log(this.cardClass);
  }

  setBrandCardClass(title: string): string {
    if (title.toLowerCase().includes('game')) return 'game';
    else if (title.toLowerCase().includes('ecosystem')) return 'ecosystem';
    return 'sankofa';
  }
}
