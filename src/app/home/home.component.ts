import { Component, OnInit } from '@angular/core';
import { AnotherServiceService } from '../another-service.service';
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AnotherServiceService]
})
export class HomeComponent implements OnInit {
  constructor(private loggingService: LoggingService, private anotherService: AnotherServiceService) {}

  ngOnInit(): void {
  }

  onButtonClick(): void {
    let maximumNumber = 10;
    let firstAddend = this.generateRandomNumber(maximumNumber);
    let secondAddend = this.generateRandomNumber(maximumNumber);
    this.anotherService.aFunction(firstAddend, secondAddend);
  }

  generateRandomNumber(maximumNumber: number): number {
    return Math.floor(Math.random() * (maximumNumber + 1));
  }
}
