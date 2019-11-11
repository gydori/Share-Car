import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DateService {
  constructor() {}

  public convertDate(date: Date): number[] {
    let convertedDate = new Array();
    convertedDate[0] = date.getFullYear();
    convertedDate[1] = date.getMonth() + 1;
    convertedDate[2] = date.getDate();
    return convertedDate;
  }
}
