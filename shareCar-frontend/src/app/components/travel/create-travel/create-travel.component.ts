import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Travel } from "src/app/models/travel.model";
import { CarService } from "src/app/services/car.service";
import { Car } from "src/app/models/car.model";

@Component({
  selector: "app-create-travel",
  templateUrl: "./create-travel.component.html",
  styleUrls: ["./create-travel.component.css"]
})
export class CreateTravelComponent implements OnInit {
  private createTravelForm: FormGroup;
  private cars: Car[];

  constructor(
    private carService: CarService,
    public dialogRef: MatDialogRef<CreateTravelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Travel
  ) {}

  ngOnInit() {
    this.createTravelForm = new FormGroup({
      departure: new FormControl("", Validators.required),
      whereFrom: new FormControl("", Validators.required),
      whereTo: new FormControl("", Validators.required),
      length: new FormControl("", Validators.required),
      priceOfFuel: new FormControl("", Validators.required),
      car: new FormControl("", Validators.required)
    });

    this.carService.getAllCar().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }
}
