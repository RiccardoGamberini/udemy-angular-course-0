import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'material.module';
import { CustomDivComponent } from './custom-div/custom-div.component';
import { AnotherCustomDivComponent } from './another-custom-div/another-custom-div.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDivComponent,
    AnotherCustomDivComponent
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
