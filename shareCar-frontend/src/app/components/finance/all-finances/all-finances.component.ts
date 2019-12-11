import { Component, OnInit } from "@angular/core";
import { FinanceService } from "src/app/services/finance.service";
import { FinanceDTO } from "../../../models/financeDTO.model";

@Component({
  selector: "app-all-finances",
  templateUrl: "./all-finances.component.html",
  styleUrls: ["./all-finances.component.css"]
})
export class AllFinancesComponent implements OnInit {
  private finances: FinanceDTO[];
  constructor(private financeService: FinanceService) {}

  ngOnInit() {
    this.financeService.getFinances().subscribe((data: FinanceDTO[]) => {
      this.finances = data;
    });
  }

  public getColor(finance: FinanceDTO): string {
    if (finance.amount < 0) {
      return "#ffb3b3";
    }
    return "#b3ff99";
  }
}
