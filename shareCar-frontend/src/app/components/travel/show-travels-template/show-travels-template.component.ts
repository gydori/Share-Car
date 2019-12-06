import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ShowCarTemplateModalComponent } from "../../car/show-car-template-modal/show-car-template-modal.component";
import { ShowPersonModalComponent } from "../../person/show-person-modal/show-person-modal.component";
import { ShowPassengersModalComponent } from "../show-passengers-modal/show-passengers-modal.component";
import { Person } from "src/app/models/person.model";
import { Travel } from "src/app/models/travel.model";
import { TravelService } from "src/app/services/travel.service";

@Component({
  selector: "app-show-travels-template",
  templateUrl: "./show-travels-template.component.html",
  styleUrls: ["./show-travels-template.component.css"]
})
export class ShowTravelsTemplateComponent implements OnInit {
  @Input() travel: Travel;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  public openShowCar(): void {
    const dialogRef = this.dialog.open(ShowCarTemplateModalComponent, {
      data: this.travel.car
    });
  }

  public openShowDriver(): void {
    const dialogRef = this.dialog.open(ShowPersonModalComponent, {
      data: this.travel.car.owner
    });
  }

  public openShowPassengers(): void {
    this.dialog.open(ShowPassengersModalComponent, {
      data: this.travel
    });
  }
}
