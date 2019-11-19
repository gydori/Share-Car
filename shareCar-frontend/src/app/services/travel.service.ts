import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseUrl } from "../constants";
import { Observable } from "rxjs";
import { Travel } from "../models/travel.model";

@Injectable({
  providedIn: "root"
})
export class TravelService {
  constructor(private http: HttpClient) {}

  public createTravel(travel: Travel): Observable<any> {
    return this.http.post(baseUrl + "travel", travel);
  }

  public getMyTravels(): Observable<any> {
    return this.http.get(baseUrl + "travel/mytravels");
  }

  public deleteTravel(travel: Travel): Observable<any> {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: travel
    };
    return this.http.delete(baseUrl + "travel", options);
  }
}
