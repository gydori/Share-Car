import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/person.service";
import { Person } from "src/app/models/person.model";
import { MatDialog } from "@angular/material/dialog";
import { CreateCarComponent } from "../../car/create-car/create-car.component";
import { CarService } from "src/app/services/car.service";
import { Car } from "src/app/models/car.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  private person: Person;
  private cars: Car[] = [];

  constructor(
    private personService: PersonService,
    private carService: CarService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.personService.getOnePerson().subscribe((data: Person) => {
      this.person = data;
    });
    this.carService.getAllCar().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  public openAddCar() {
    const dialogRef = this.dialog.open(CreateCarComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.carService.createCar(result).subscribe((data: Car) => {
        this.cars.push(data);
      });
    });
  }

  public deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.cars = this.cars.filter(item => item != car);
    });
  }
}
