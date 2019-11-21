import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateTravelComponent } from "../create-travel/create-travel.component";
import { TravelService } from "src/app/services/travel.service";
import { Travel } from "src/app/models/travel.model";

@Component({
  selector: "app-my-travels",
  templateUrl: "./my-travels.component.html",
  styleUrls: ["./my-travels.component.css"]
})
export class MyTravelsComponent implements OnInit {
  private myTravelsAsDriver: Travel[] = [];
  private myTravelsAsPassenger: Travel[] = [];

  constructor(
    private dialog: MatDialog,
    private travelService: TravelService
  ) {}

  ngOnInit() {
    this.travelService.getMyTravelsAsDriver().subscribe((data: Travel[]) => {
      this.myTravelsAsDriver = data;
    });
    this.travelService.getMyTravelsAsPassenger().subscribe((data: Travel[]) => {
      this.myTravelsAsPassenger = data;
    });
  }

  public openAddTravel(): void {
    const dialogRef = this.dialog.open(CreateTravelComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.travelService.createTravel(result).subscribe((data: Travel) => {
          this.myTravelsAsDriver.push(data);
        });
      }
    });
  }

  public deleteTravel(travel: Travel): void {
    this.travelService.deleteTravel(travel).subscribe(() => {
      this.myTravelsAsDriver = this.myTravelsAsDriver.filter(
        item => item != travel
      );
    });
  }
}
