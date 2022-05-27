import { Component, OnInit } from '@angular/core';
import {AServiceService} from "../services/a-service.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [AServiceService]
})
export class SettingsComponent implements OnInit {
  user: User = new User("", "");

  constructor(private aServiceService: AServiceService) {
    console.log("Settings page constructor.")
    this.aServiceService.anEventEmitter.subscribe((user: User) => this.user = user);
  }

  ngOnInit(): void {
  }
}
