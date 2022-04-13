import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customH2BaseClassName = 'customH2BaseClassName';
  statusesNames = ['isActive', 'isInactive', 'isWaiting'];
  currentH2StatusName = 'isInactive';
  ngOnInit() {
    let maximumRandomInteger = (this.statusesNames.length - 1);
    let randomInteger = Math.floor(Math.random() * (maximumRandomInteger + 1));
    this.currentH2StatusName = this.statusesNames[randomInteger];
  }
}
