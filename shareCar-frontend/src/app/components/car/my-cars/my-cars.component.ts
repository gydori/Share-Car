import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/models/car.model";
import { CarService } from "src/app/services/car.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateCarComponent } from "../create-car/create-car.component";

@Component({
  selector: "app-my-cars",
  templateUrl: "./my-cars.component.html",
  styleUrls: ["./my-cars.component.css"]
})
export class MyCarsComponent implements OnInit {
  private cars: Car[] = [];

  constructor(private carService: CarService, private dialog: MatDialog) {}

  ngOnInit() {
    this.carService.getAllCar().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  public openAddCar() {
    const dialogRef = this.dialog.open(CreateCarComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.carService.createCar(result).subscribe((data: Car) => {
          this.cars.push(data);
        });
      }
    });
  }

  public deleteCar(car: Car) {
    this.carService.deleteCar(car.id).subscribe(() => {
      this.cars = this.cars.filter(item => item != car);
    });
  }
}
