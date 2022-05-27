import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {AServiceService} from "../services/a-service.service";

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {
  user: User = new User("", "");

  constructor(private aServiceService: AServiceService) {
    this.aServiceService.anEventEmitter.subscribe((user: User) => this.user = user);
  }

  ngOnInit(): void {
  }
}
