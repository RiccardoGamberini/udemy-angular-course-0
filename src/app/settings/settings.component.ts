import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [LoggingService]
})
export class SettingsComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onButtonClick(message: string) {
    this.loggingService.logMessage(message)
  }
}
