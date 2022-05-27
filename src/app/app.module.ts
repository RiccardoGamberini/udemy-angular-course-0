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
import { SettingsComponent } from './settings/settings.component';
import {LoggingService} from "./services/logging.service";

/*In this branch i'm:
  - Injecting another-service service in home component telling Angular that another-service service is injectable only in home component and childs (i'm telling
  this to Angular inserting "AnotherServiceService" in providers array of home component.
  - Injecting logging service in the another-service service. In order to do so i insert "LoggingService" in providers array of @NgModule decorator of app module.
  In order to inject a service into a service it's not necessary to use always providers array of @NgModule decorator of app module. It's necessary instead to use
  providers array of @NgModule decorator of a module that is father of the receiver service and the service that i want to inject.
  The only way to permit to inject a service into other services is to use providers array of a @NgModule decorator.
  For example if i want to inject a service called beta in another service called alpha i can't make it available for injection using providers
  array of a component. If i use the providers array of a component Angular won't propagate the instance of the injected service down the receiver service, the receiver
  service is a child of the component in the hierarchy. If i use the providers array of a module Angular will propagate the instance of the service that i want
  to inject, down to the receiver service, the receiver service is a child of the module in the hierarchy.*/
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavItemComponent,
    HomeComponent,
    SettingsComponent,
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
