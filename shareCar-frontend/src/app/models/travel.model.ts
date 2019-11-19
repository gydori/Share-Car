import { Car } from "./car.model";

export class Travel {
  public id: number;
  public departure: any;
  public whereFrom: string;
  public whereTo: string;
  public length: number;
  public priceOfFuel: number;
  public car: Car;

  constructor(
    departure: any,
    whereFrom: string,
    whereTo: string,
    length: number,
    priceOfFuel: number,
    car: Car
  ) {
    this.departure = departure;
    this.whereFrom = whereFrom;
    this.whereTo = whereTo;
    this.length = length;
    this.priceOfFuel = priceOfFuel;
    this.car = car;
  }
}
