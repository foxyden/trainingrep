import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginComponent } from './components/login.component/login.component';
import { MainComponent } from './components/main.component/main.component';
import {InMemoryData} from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData),
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
