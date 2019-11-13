import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Car } from "src/app/models/car.model";

@Component({
  selector: "app-create-car",
  templateUrl: "./create-car.component.html",
  styleUrls: ["./create-car.component.css"]
})
export class CreateCarComponent implements OnInit {
  private creatCarForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  ngOnInit() {
    this.creatCarForm = new FormGroup({
      registrationNumber: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      numberOfSeats: new FormControl("", Validators.required),
      consumptionPerKm: new FormControl("", Validators.required)
    });
  }
}
