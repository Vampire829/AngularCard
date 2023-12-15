import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponentComponent } from './items-list-component/items-list-component.component';
import { ItemsCardComponent } from './items-list-component/items-card/items-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponentComponent,
    ItemsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
