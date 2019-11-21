import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Car } from "../models/car.model";
import { baseUrl } from "../constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor(private http: HttpClient) {}

  public createCar(car: Car): Observable<any> {
    return this.http.post(baseUrl + "car", car);
  }

  public getAllCar(): Observable<any> {
    return this.http.get(baseUrl + "car");
  }

  public deleteCar(id: number): Observable<any> {
    return this.http.delete(baseUrl + "car/" + id);
  }
}
