import { Person } from "./person.model";

export class FinanceDTO {
  public person: Person;
  public amount: number;

  constructor(person: Person, amount: number) {
    this.person = person;
    this.amount = amount;
  }
}
