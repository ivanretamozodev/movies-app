import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const apiKey = environment.apiKey;
        console.log(apiKey);
        const modifiedRequest = request.clone({
            params: request.params.append('api_key', apiKey)
        });
        return next.handle(modifiedRequest);
    }
}
