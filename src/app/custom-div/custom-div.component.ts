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
  * - The line .....@ContentChild('aParagraph') aParagraph: ElementRef;..... has been inserted in order to permit to custom-div component to access it's own
  * content HTML elements. It's own content HTML elements are ones that stay between opening and closing tags of custom-div component (i'm talking about the opening and closing tags
  * present in app.component.html). These HTML elements are the content of custom-div component. The content of a component is
  * a different thing than the view of a component. Note that in the official Angular documentation there is the distinction of content and
  * view (example: ViewChild and ContentChild). This branch has a unique instance of custom-div component and it's content is set using app.component.html.
  * Using ng-content and ContentChild i can transfer data (in this branch i'm transferring the text of a paragraph) from a parent component (the app component)
  * to a child component (the custom-div component).
  * - The text of  (.....aParagraph: ElementRef.....) is the first HTML element that match the selector passed to @ContentChild.
  * */
  @ContentChild('aParagraph') aParagraph: ElementRef;

  aFunction() {
    console.log(this.aParagraph);
    this.message = `The someParagraph ElementRef object is printed in console. It's value is: ${this.aParagraph.nativeElement.textContent}`;
  }
}
