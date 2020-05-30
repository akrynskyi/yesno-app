import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { HeaderComponent } from './main-view/header/header.component';
import { ContentComponent } from './main-view/content/content.component';
import { FooterComponent } from './main-view/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
