import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassDashboardComponent } from './shared/component/pass-dashboard/pass-dashboard.component';
import { PassCountComponent } from './shared/component/pass-count/pass-count.component';
import { PassCardComponent } from './shared/component/pass-card/pass-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PassDashboardComponent,
    PassCountComponent,
    PassCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
