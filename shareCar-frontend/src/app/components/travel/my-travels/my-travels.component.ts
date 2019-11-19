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
  private travels: Travel[] = [];

  constructor(
    private dialog: MatDialog,
    private travelService: TravelService
  ) {}

  ngOnInit() {
    this.travelService.getMyTravels().subscribe((data: Travel[]) => {
      this.travels = data;
    });
  }

  public openAddTravel(): void {
    const dialogRef = this.dialog.open(CreateTravelComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.travelService.createTravel(result).subscribe((data: Travel) => {
          this.travels.push(data);
        });
      }
    });
  }

  public deleteTravel(travel: Travel): void {
    this.travelService.deleteTravel(travel).subscribe(() => {
      this.travels = this.travels.filter(item => item != travel);
    });
  }
}
