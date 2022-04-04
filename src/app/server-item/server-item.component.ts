import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {
  /* 
  Notes:
  - ServerItem is and alias for an instance of an object that has the
  type server: {id: number, name: string}.
  - @Input() permits to to instantiate an object of type serverItem.
  Some objects of type serverItem are instantiated in app.component.html.
  */
  @Input() serverItem: {id: number, name: string};
  constructor() { }

  ngOnInit(): void {
  }

}
