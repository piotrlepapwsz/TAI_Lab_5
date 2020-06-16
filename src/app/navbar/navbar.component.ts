import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthenticationService, public router: Router) {
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
