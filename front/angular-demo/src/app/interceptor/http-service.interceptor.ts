import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((resp: HttpErrorResponse) => {
        if (resp.status === 500) {
          Swal.fire({
            icon: 'error',
            title: 'deu ruim',
            text: resp.error
          })
        }
        return throwError(() => new Error('deu ruim'));
      })
    )
  }
}
