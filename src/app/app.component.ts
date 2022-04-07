import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('aParagraph') aParagraph: ElementRef;

  ngOnInit() {
    console.log(`Paragraph text isn't visible because component view hasn't been initialized yet.\n
    Paragraph text: ${this.aParagraph.nativeElement.textContent}`);
  }

  ngAfterViewInit() {
    /*
    * When ngAfterViewInit is executed the component lifecycle phase in which Angular has initialized the app component view is completed. Thanks to the fact that
    * this phase is completed i can access HTML elements of app.component.html
    * (.....this.aParagraph.nativeElement.textContent). If you want to access an HTML element as soon as possible during the component lifecycle
    * you have to do it in ngAfterViewInit body.
    * */
    console.log(`Paragraph text is visible because ngAfterViewInit is executed after component view has been initialized.\n
    Paragraph text: ${this.aParagraph.nativeElement.textContent}`);
  }

}
