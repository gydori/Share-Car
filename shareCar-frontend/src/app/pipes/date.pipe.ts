import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "customDate" })
export class CustomDatePipe implements PipeTransform {
  transform(date: number[]): string {
    return (
      date[0] +
      " - " +
      this.lessThenTen(date[1]) +
      date[1] +
      " - " +
      this.lessThenTen(date[2]) +
      date[2]
    );
  }

  public lessThenTen(num: number): string {
    return num < 10 ? "0" : "";
  }
}
