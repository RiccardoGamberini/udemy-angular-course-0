import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
