import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { CustomAttributeDirectiveDirective } from './custom-attribute-directive/custom-attribute-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomAttributeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
