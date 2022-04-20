import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'material.module';
import { CustomDivComponent } from './custom-div/custom-div.component';
import {AService} from "./aService.service";

/*In order to have inject the aService at app.module.ts level i have to insert the name of the service class in providers array.*/
@NgModule({
  declarations: [
    AppComponent,
    CustomDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AService],
  bootstrap: [AppComponent]
})
export class AppModule {}
