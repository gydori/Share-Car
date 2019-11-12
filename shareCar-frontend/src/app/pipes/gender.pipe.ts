import { Pipe, PipeTransform } from "@angular/core";
import { Gender } from "../models/person.model";

@Pipe({ name: "gender" })
export class GenderPipe implements PipeTransform {
  transform(gender: string): string {
    switch (gender) {
      case Gender[Gender.MALE]:
        return "férfi";
      case Gender[Gender.FEMALE]:
        return "nő";
    }
  }
}
