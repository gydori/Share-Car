import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { SessionService } from "../services/session.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public sessionService: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.sessionService.hasToken()) {
      req = req.clone({
        setHeaders: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
    }
    return next.handle(req);
  }
}
