import { Injectable } from "@angular/core";
import { baseUrl } from "../constants";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FinanceService {
  private baseUrl = baseUrl + "finance";

  constructor(private http: HttpClient) {}

  public getFinances(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
