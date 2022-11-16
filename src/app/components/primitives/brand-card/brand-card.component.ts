import { Component, Input, OnInit,HostBinding } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss'],
})
export class BrandCardComponent implements OnInit {
  @Input() brandCardInfo: { title: string; color: string; text: string } = {
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

  constructor(private domSanitizer:DomSanitizer) {}

  ngOnInit(): void {
    console.log(this.brandCardInfo);
  }
}
