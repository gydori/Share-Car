import { Person } from "./person.model";

export class Car {
  public id: number;
  public registrationNumber: string;
  public type: string;
  public numberOfSeats: number;
  public consumptionPerKm: number;
  public owner: Person;

  constructor(
    registrationNumber: string,
    type: string,
    numberOfSeats: number,
    consumptionPerKm: number,
    owner: Person
  ) {
    this.registrationNumber = registrationNumber;
    this.type = type;
    this.numberOfSeats = numberOfSeats;
    this.consumptionPerKm = consumptionPerKm;
    this.owner = owner;
  }
}
