import { Component, OnInit, Inject } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { Person } from "src/app/models/person.model";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-show-passengers-modal",
  templateUrl: "./show-passengers-modal.component.html",
  styleUrls: ["./show-passengers-modal.component.css"]
})
export class ShowPassengersModalComponent implements OnInit {
  private passengers: Person[];

  constructor(
    private travelService: TravelService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.travelService
      .getPassengers(this.data.id)
      .subscribe((data: Person[]) => {
        this.passengers = data;
      });
  }
}
