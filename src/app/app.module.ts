import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { loginComponent } from './components/login.component/login.component';
import { mainComponent } from './components/main.component/main.component';
import { inMemoryDataService } from './services/in-memory-data.service';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, loginComponent, mainComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(inMemoryDataService), ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent],
})
export class AppModule {}
