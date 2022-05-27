import {EventEmitter, Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable()

export class AServiceService {
  anEventEmitter = new EventEmitter<User>();
}
