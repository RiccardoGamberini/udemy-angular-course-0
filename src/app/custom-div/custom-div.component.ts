import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css']
})
export class CustomDivComponent {
  message: string;
  /*
  * Notes:
  * - The following line has been inserted in order to permit to custom-div.component.ts to access HTML elements that stay between opening and closing tags
  * of custom-div component (i'm talking about the opening and closing tags present in app.component.html). These HTML elements are called the content
  * of custom-div component. The content of custom-div component is a different thing than the view of custom-div component. Note that in the Angular documentation
  * there is the distinction of content and view (example: ViewChild and ContentChild).
  * - The value of someParagraph variable (.....someParagraph: ElementRef.....) is the first HTML element that match the selector passed to @ContentChild.
  * */
  @ContentChild('someParagraph') someParagraph: ElementRef; /*With ContentChild custom-div component can access to it's own content.*/

  aFunction() {
    console.log(this.someParagraph);
    this.message = `The someParagraph ElementRef object is printed in console. It's value is: ${this.someParagraph.nativeElement.textContent}`;
  }
}
