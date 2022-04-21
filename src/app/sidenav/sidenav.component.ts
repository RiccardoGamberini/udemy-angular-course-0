import { Component } from '@angular/core';
import {SidenavItem} from "./sidenav-item/sidenavItem.model";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  /*The second parameter required by SidenavItem constructor is a part of an URL.
  * In Angular there are:
  * - Absolute paths
  * An absolute path in Angular is a string that starts with a slash ('/').
  * If i 'say' to Angular go to this absolute path Angular will append the string settings to the application base path.
  * I'll explain how a relative path works in angular using two examples.
  * Example 0.
  * If:
  * - The current URL in browser addresses bar is 'http://localhost:4201'.
  * - I click on a button that has the value of the attribute routerLink equal to '/settings'.
  * Angular will build an URL appending the string '/settings' to the application base path ('http://localhost:4201') and will direct the application to this
  * URL. The current URL in browser addresses bar will became 'http://localhost:4201/settings'.
  * Example 1.
  *   * If:
  * - The current URL in browser addresses bar is 'http://localhost:4201/settings'.
  * - I click on a button that has the value of the attribute routerLink equal to '/settings'.
  * Angular will build an URL appending the string '/settings' to the application base path ('http://localhost:4201') and will direct the application to this
  * became 'http://localhost:4201/settings'.
  * - Relative paths.
  * A relative path in Angular is a string that doesn't start with a slash ('/').
  * Angular will build an URL appending the string settings to the current URL in browser addresses bar.
  * I'll explain how a relative path works in angular using two examples.
  * Example 0.
  * If:
  * - The current URL in browser addresses bar is 'http://localhost:4201'.
  * - I click on a button that has the value of the attribute routerLink equal to 'settings'.
  * Angular will build an URL appending the string settings to the current URL in browser addresses bar and will direct the application to this
  * URL. The current URL in browser addresses bar will became 'http://localhost:4201/settings'.
  * Example 1.
  *   * If:
  * - The current URL in browser addresses bar is 'http://localhost:4201/settings'.
  * - I click on a button that has the value of the attribute routerLink equal to 'settings'.
  * Angular will build an URL appending the string settings to the current URL in browser addresses bar and will direct the application to this
  * URL. The current URL in browser addresses bar will became 'http://localhost:4201/settings/settings'.*/
  sidenavItems = [
    new SidenavItem('Home', ''),
    new SidenavItem('Settings', 'settings')
  ];
}
