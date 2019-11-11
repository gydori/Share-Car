export enum Gender {
  MALE,
  FEMALE
}

export class Person {
  public id: number;
  public email: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public gender: Gender;
  public dateOfBirth: any;

  constructor(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    gender: Gender,
    dateOfBirth: number[]
  ) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
  }
}
