import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/person.service";
import { Person } from "src/app/models/person.model";
import { MatDialog } from "@angular/material/dialog";
import { CreateCarComponent } from "../../car/create-car/create-car.component";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  private person: Person;

  constructor(
    private personService: PersonService,
    private carService: CarService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.personService.getOnePerson().subscribe((data: Person) => {
      this.person = data;
    });
  }

  public openAddCar() {
    const dialogRef = this.dialog.open(CreateCarComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.carService.createCar(result).subscribe(() => {});
    });
  }
}
