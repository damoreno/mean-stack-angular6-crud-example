import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
constructor(private router: Router){}
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken = localStorage.getItem("id_token");

        if (req.url.indexOf('/private') === 0 && !idToken){
            this.router.navigate(['/loginup']);
        }

        if (req.url.indexOf('/private') === 0 && idToken) {
              const cloned = req.clone({ setHeaders: { Authorization: idToken } });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
