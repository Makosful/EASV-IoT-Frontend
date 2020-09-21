import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';

const config: SocketIoConfig = {url: environment.socketHost, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
