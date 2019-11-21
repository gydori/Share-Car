import { Component, OnInit } from "@angular/core";
import { Travel } from "src/app/models/travel.model";
import { TravelService } from "src/app/services/travel.service";

@Component({
  selector: "app-all-travels",
  templateUrl: "./all-travels.component.html",
  styleUrls: ["./all-travels.component.css"]
})
export class AllTravelsComponent implements OnInit {
  private travels: Travel[];

  constructor(private travelService: TravelService) {}

  ngOnInit() {
    this.travelService.getAllTravels().subscribe((data: Travel[]) => {
      this.travels = data;
    });
  }
}
