import { Component, OnInit, Input } from "@angular/core";
import { Car } from "src/app/models/car.model";

@Component({
  selector: "app-show-car-template",
  templateUrl: "./show-car-template.component.html",
  styleUrls: ["./show-car-template.component.css"]
})
export class ShowCarTemplateComponent implements OnInit {
  @Input() car: Car;

  constructor() {}

  ngOnInit() {}
}
