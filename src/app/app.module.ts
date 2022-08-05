import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RightsideComponent } from './rightside/rightside.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftsideComponent } from './leftside/leftside.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RightsideComponent,
    LeftsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
