import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ShowCarTemplateModalComponent } from "../../car/show-car-template-modal/show-car-template-modal.component";
import { ShowPersonModalComponent } from "../../person/show-person-modal/show-person-modal.component";

@Component({
  selector: "app-show-travels-template",
  templateUrl: "./show-travels-template.component.html",
  styleUrls: ["./show-travels-template.component.css"]
})
export class ShowTravelsTemplateComponent implements OnInit {
  @Input() travel;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openShowCar() {
    const dialogRef = this.dialog.open(ShowCarTemplateModalComponent, {
      data: this.travel.car
    });
  }

  openShowDriver() {
    const dialogRef = this.dialog.open(ShowPersonModalComponent, {
      data: this.travel.car.owner
    });
  }
}
