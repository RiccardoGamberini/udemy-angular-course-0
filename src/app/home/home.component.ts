import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AServiceService } from "../services/a-service.service";
import { User } from "../models/user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("surnameInput") surnameInput: ElementRef;

  constructor(private aServiceService: AServiceService) {}

  ngOnInit(): void {
  }

  onButtonClick(): void {
    let user = new User(this.nameInput.nativeElement.value, this.surnameInput.nativeElement.value);
    this.aServiceService.anEventEmitter.emit(user);
  }
}
