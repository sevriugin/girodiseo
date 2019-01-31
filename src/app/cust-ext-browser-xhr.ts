import { Injectable } from '@angular/core';
import { HttpXhrBackend, HttpRequest, HttpEvent, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustExtBrowserXhr extends HttpXhrBackend {
    constructor(xhrFactory: XhrFactory) {
        super(xhrFactory);
    }
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        const event = super.handle(req);
        req.headers.set('Access-Control-Allow-Origin', '*');
        return event;
      }
}
