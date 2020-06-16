import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class InterceptorAuthService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const basicAuthHeaderString = this.authenticationService.getAuthenticatedToken();
    const username = this.authenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      console.log(basicAuthHeaderString);
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }

}
