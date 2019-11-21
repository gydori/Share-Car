import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseUrl } from "../constants";
import { Observable } from "rxjs";
import { Travel } from "../models/travel.model";

@Injectable({
  providedIn: "root"
})
export class TravelService {
  private baseUrl = baseUrl + "travel";

  constructor(private http: HttpClient) {}

  public createTravel(travel: Travel): Observable<any> {
    return this.http.post(this.baseUrl, travel);
  }

  public getMyTravelsAsDriver(): Observable<any> {
    return this.http.get(this.baseUrl + "/mytravels/driver");
  }

  public getMyTravelsAsPassenger(): Observable<any> {
    return this.http.get(this.baseUrl + "/mytravels/passenger");
  }

  public getAllTravels(): Observable<any> {
    return this.http.get(this.baseUrl + "/alltravels");
  }

  public getCarTravels(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/cartravels/" + id);
  }

  public deleteTravel(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  public joinTravel(id: number): Observable<any> {
    return this.http.put(this.baseUrl + "/join/" + id, {});
  }

  public unjoinTravel(id: number): Observable<any> {
    return this.http.put(this.baseUrl + "/unjoin/" + id, {});
  }
}
