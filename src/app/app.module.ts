import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'material.module';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomDivComponent } from './custom-div/custom-div.component';
import { AService } from "./aService.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
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
