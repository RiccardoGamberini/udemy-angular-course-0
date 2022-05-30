import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from 'material.module';
import { MatNativeDateModule } from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { HomeComponent } from './home/home.component';
import {LoggingService} from "./services/logging.service";

/* The following two things are similar:
0) Writing the following code in the typescript file of app module.
.....
import { LoggingService } from "../services/logging.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoggingService]
})
.....
1) Writing the following code in the typescript file of a service.
.....
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
.....

I said that are similar because:
- 0)
  - Set a module as a hierarchy level:
    - Into which you can inject the logging service.
    - Below which all hierarchy levels can receive an instance of the logging service.
- 1)
  - Set a module as a hierarchy level:
     - Into which you can inject the logging service.
     - Below which all hierarchy levels can receive an instance of the logging service.
  - Tells Angular to load lazily logging service into the hierarchy levels in which is injected.
* */
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavItemComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
