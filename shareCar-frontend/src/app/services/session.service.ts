import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { baseUrl } from "../constants";

@Injectable({
  providedIn: "root"
})
export class SessionService {
  private route = baseUrl + "oauth/token";
  private isLoggedIn: Boolean = new Boolean(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  public getToken(email: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set("username", email)
      .set("password", password)
      .set("grant_type", "password");
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Basic " + btoa("fooClientIdPassword:secret"),
        "Content-type": "application/x-www-form-urlencoded"
      })
    };
    return this.http.post(this.route, body, httpOptions);
  }

  public login(email: string, password: string) {
    this.getToken(email, password).subscribe(data => {
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("expires_at", data.expires_in);
      this.isLoggedIn = true;
      this.router.navigate(["profile"]);
    });
  }

  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    this.isLoggedIn = false;
    this.router.navigate([""]);
  }

  public hasToken(): boolean {
    return !!localStorage.getItem("token");
  }
}
