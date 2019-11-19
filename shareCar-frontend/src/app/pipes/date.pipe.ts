import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "customDate" })
export class CustomDatePipe implements PipeTransform {
  transform(date: number[]): string {
    let dateString =
      date[0] +
      " - " +
      this.lessThenTen(date[1]) +
      date[1] +
      " - " +
      this.lessThenTen(date[2]) +
      date[2];
    if (date.length > 3) {
      dateString =
        dateString +
        " " +
        this.lessThenTen(date[3]) +
        date[3] +
        " : " +
        this.lessThenTen(date[4]) +
        date[4];
    }
    return dateString;
  }

  public lessThenTen(num: number): string {
    return num < 10 ? "0" : "";
  }
}
