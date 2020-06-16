import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const auth = this.injector.get(AuthenticationService);
    request = request.clone({
      setHeaders: {
        'x-auth-token': `${auth.getAuthenticatedToken()}`
      }
    });

    return next.handle(request);
  }
}
