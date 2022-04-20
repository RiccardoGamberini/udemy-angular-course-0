import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'material.module';
import { AService } from "./aService.service";
import { AnotherService } from "./anotherService.service";

/*In order to inject AService into AnotherService for both services:
- The name of the class must be inserted in providers array.
- A line in which the typescript file is imported must be added.*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AService, AnotherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
