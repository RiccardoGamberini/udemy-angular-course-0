import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

import { FormsModule } from '@angular/forms'; /* This line is necessary in order to use two-way-binding.*/
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';

/*In order to user two-way-binding is also necessary to add FormsModule in imports section.*/
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    HeaderComponent
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
