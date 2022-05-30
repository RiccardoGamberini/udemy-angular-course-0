import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
  }

  onButtonClick(message: string) {
    this.loggingService.logMessage(message)
  }
}
