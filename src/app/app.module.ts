import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { ProviderService } from './services/provider.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProviderCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
