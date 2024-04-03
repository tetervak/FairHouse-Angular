import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import {HttpClientModule} from "@angular/common/http";
import { HousingDetailsComponent } from './housing-details/housing-details.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HousingDetailsComponent,
    SearchBoxComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
