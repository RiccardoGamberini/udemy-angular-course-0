import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'material.module';

import { AppComponent } from './app.component';
import { CustomDivComponent } from './custom-div/custom-div.component';
import { AService } from "./aService.service";

/*In order to have inject the aService at app.module.ts level i have to:
* - Insert the name of the service class in providers array (.....providers: [AService].....).
* - Add a line in which i import aService.service.ts (.....import {AService} from "./aService.service";
.....)*/
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
