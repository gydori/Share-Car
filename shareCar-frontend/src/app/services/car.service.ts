import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
}
