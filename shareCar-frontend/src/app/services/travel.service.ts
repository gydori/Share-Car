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

  public getMyTravelsAsDriver(): Observable<any> {
    return this.http.get(baseUrl + "travel/mytravels/driver");
  }

  public getMyTravelsAsPassenger(): Observable<any> {
    return this.http.get(baseUrl + "travel/mytravels/passenger");
  }

  public getAllTravels(): Observable<any> {
    return this.http.get(baseUrl + "travel/alltravels");
  }

  public deleteTravel(id: number): Observable<any> {
    return this.http.delete(baseUrl + "travel/" + id);
  }

  public joinTravel(id: number): Observable<any> {
    return this.http.put(baseUrl + "travel/join/" + id, {});
  }

  public unjoinTravel(id: number): Observable<any> {
    return this.http.put(baseUrl + "travel/unjoin/" + id, {});
  }
}
