import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/sections/footer/footer.component';
import { FirstScreenComponent } from './components/sections/first-screen/first-screen.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { PrButtonComponent } from './components/primitives/pr-button/pr-button.component';
import { AboutUsComponent } from './components/sections/about-us/about-us.component';
import { RoadMapComponent } from './components/sections/road-map/road-map.component';
import { OurBrandsComponent } from './components/sections/our-brands/our-brands.component';
import { PrTitleWListComponent } from './components/primitives/pr-title-w-list/pr-title-w-list.component';
import { BrandCardComponent } from './components/primitives/brand-card/brand-card.component';
import { OurResourcesComponent } from './components/sections/our-resources/our-resources.component';
import { GameComponent } from './components/sections/game/game.component';
import { PrCircleWTextComponent } from './components/primitives/pr-circle-w-text/pr-circle-w-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstScreenComponent,
    PrButtonComponent,
    AboutUsComponent,
    RoadMapComponent,
    OurBrandsComponent,
    PrTitleWListComponent,
    BrandCardComponent,
    OurResourcesComponent,
    GameComponent,
    PrCircleWTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
