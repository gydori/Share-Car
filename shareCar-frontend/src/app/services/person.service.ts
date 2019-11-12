import { Injectable } from "@angular/core";
import { baseUrl } from "../constants";
import { Person } from "../models/person.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  constructor(private http: HttpClient) {}

  public createPerson(person: Person) {
    return this.http.post(baseUrl + "register", person);
  }

  public getOnePerson() {
    return this.http.get(baseUrl + "profile");
  }
}
