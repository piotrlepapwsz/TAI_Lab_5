import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {
  }

  canActivate() {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }
  }
}
