export class Car {
  public id: number;
  public registrationNumber: string;
  public type: string;
  public numberOfSeats: number;
  public consumptionPerKm: number;

  constructor(
    registrationNumber: string,
    type: string,
    numberOfSeats: number,
    consumptionPerKm: number
  ) {
    this.registrationNumber = registrationNumber;
    this.type = type;
    this.numberOfSeats = numberOfSeats;
    this.consumptionPerKm = consumptionPerKm;
  }
}
