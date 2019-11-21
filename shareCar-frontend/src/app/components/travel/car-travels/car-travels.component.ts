import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Travel } from "src/app/models/travel.model";
import { TravelService } from "src/app/services/travel.service";

@Component({
  selector: "app-car-travels",
  templateUrl: "./car-travels.component.html",
  styleUrls: ["./car-travels.component.css"]
})
export class CarTravelsComponent implements OnInit {
  private travels: Travel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private travelService: TravelService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.travelService
        .getCarTravels(params.id)
        .subscribe((data: Travel[]) => {
          this.travels = data;
        });
    });
  }

  public deleteTravel(travel: Travel): void {
    this.travelService.deleteTravel(travel.id).subscribe(() => {
      this.travels = this.travels.filter(t => t != travel);
    });
  }

  public back() {
    this.router.navigate(["profile"]);
  }
}
