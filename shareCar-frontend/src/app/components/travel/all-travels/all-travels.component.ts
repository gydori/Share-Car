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
  private myTravelsAsDriver: Travel[];
  private myTravelsAsPassenger: Travel[];

  constructor(private travelService: TravelService) {}

  ngOnInit() {
    this.travelService.getAllTravels().subscribe((data: Travel[]) => {
      this.travels = data;
    });
    this.travelService.getMyTravelsAsDriver().subscribe((data: Travel[]) => {
      this.myTravelsAsDriver = data;
    });
    this.travelService.getMyTravelsAsPassenger().subscribe((data: Travel[]) => {
      this.myTravelsAsPassenger = data;
    });
  }

  public joinTravel(travel: Travel) {
    this.travelService.joinTravel(travel.id).subscribe(() => {
      this.myTravelsAsPassenger.push(travel);
    });
  }

  public unjoinTravel(travel: Travel) {
    this.travelService.unjoinTravel(travel.id).subscribe(() => {
      this.myTravelsAsPassenger = this.myTravelsAsPassenger.filter(
        t => t != travel
      );
    });
  }

  public isNotMyTravelAsDriver(travel: Travel): boolean {
    return (
      this.myTravelsAsDriver &&
      this.myTravelsAsDriver.filter(t => t.id == travel.id).length == 0
    );
  }

  public isNotMyTravelAsPassenger(travel: Travel): boolean {
    return (
      this.myTravelsAsPassenger &&
      this.myTravelsAsPassenger.filter(t => t.id == travel.id).length == 0
    );
  }

  public deleteTravel(travel: Travel): void {
    this.travelService.deleteTravel(travel.id).subscribe(() => {
      this.myTravelsAsDriver = this.myTravelsAsDriver.filter(t => t != travel);
      this.travels = this.travels.filter(t => t != travel);
    });
  }
}
