import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/sections/footer/footer.component';
import { FirstScreenComponent } from './components/sections/first-screen/first-screen.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { PrButtonComponent } from './components/primitives/pr-button/pr-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstScreenComponent,
    PrButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
