import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {
  /* ServerItem is a type. I can instantiate an object of type serverItem. Server is an alias
  for the type serverItem. I'm using this alias in app.component.html ([server]=serverObj).
  */
  @Input('server') serverItem: {id: number, name: string};
}
