import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Car } from "src/app/models/car.model";

@Component({
  selector: "app-show-car-template-modal",
  templateUrl: "./show-car-template-modal.component.html",
  styleUrls: ["./show-car-template-modal.component.css"]
})
export class ShowCarTemplateModalComponent implements OnInit {
  private car: Car;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit() {
    this.car = this.data;
  }
}
