import { Component, OnInit, Input } from "@angular/core";
import { Person } from "src/app/models/person.model";

@Component({
  selector: "app-show-person-template",
  templateUrl: "./show-person-template.component.html",
  styleUrls: ["./show-person-template.component.css"]
})
export class ShowPersonTemplateComponent implements OnInit {
  @Input() person: Person;
  constructor() {}

  ngOnInit() {}
}
