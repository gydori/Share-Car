import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Person } from "src/app/models/person.model";

@Component({
  selector: "app-show-person-modal",
  templateUrl: "./show-person-modal.component.html",
  styleUrls: ["./show-person-modal.component.css"]
})
export class ShowPersonModalComponent implements OnInit {
  private person: Person;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit() {
    this.person = this.data;
  }
}
